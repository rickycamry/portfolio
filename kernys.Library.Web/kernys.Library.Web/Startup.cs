using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using kernys.Library.Core.Models;
using Kernys.Library.Repository.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace kernys.Library.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public DbContextOptionsBuilder OptionsB { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddDbContext<LibraryDbContext>(options =>
              options.UseSqlServer(Configuration.GetConnectionString("MyConnectionString")));

            services.AddIdentity<LibraryUser, IdentityRole>(opt =>
            {
                opt.Password.RequiredLength = 8;
                opt.Password.RequireNonAlphanumeric = true;
                opt.Password.RequireUppercase = true;
                opt.User.AllowedUserNameCharacters = null;
                opt.User.RequireUniqueEmail = true;

                 
            })
                    .AddEntityFrameworkStores<LibraryDbContext>();

            services.AddAuthentication(opt=>{
                 opt.DefaultScheme=JwtBearerDefaults.AuthenticationScheme;
                 opt.DefaultAuthenticateScheme=JwtBearerDefaults.AuthenticationScheme;
                 opt.DefaultChallengeScheme=JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg=>{
               cfg.RequireHttpsMetadata=false;
               cfg.SaveToken=true;
               cfg.TokenValidationParameters=new Microsoft.IdentityModel.Tokens.TokenValidationParameters(){

                //standar config 
                ValidIssuer=Configuration["Auth:Jwt:Issuer"],
                ValidAudience=Configuration["Auth:Jwt:Audience"],
                IssuerSigningKey=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Auth:Jwt:Key"])),
                ClockSkew=TimeSpan.Zero,

                //Security Swtiches
                RequireExpirationTime=true,
                ValidateIssuer=true,
                ValidateIssuerSigningKey=true,
                ValidateAudience=true
               };

            });


                var optionsBuilder = new DbContextOptionsBuilder<LibraryDbContext>()
                                         .UseSqlServer(Configuration.GetConnectionString("MyConnectionString"));

                var dbContext = new LibraryDbContext(optionsBuilder.Options); 

                //Ensure to delete database
                // dbContext.Database.EnsureDeleted();
                //Create the DB if it doesn't exist and applies peding migrations.
                dbContext.Database.EnsureCreated();

                 //Feed the db with my example data
                 Repository.Data.DbInitializer.Seed(dbContext);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            //DI
            services.AddTransient<Kernys.Library.Service.Interfaces.IAuthorService, Kernys.Library.Repository.Repositories.AuthorRepository>();
            services.AddTransient<Kernys.Library.Service.Interfaces.IBookService, Kernys.Library.Repository.Repositories.BookRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            /*     if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }
                else
                {
                    app.UseExceptionHandler("/Error");
                    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                    app.UseHsts();
                }

                app.UseHttpsRedirection();
                app.UseStaticFiles();
                app.UseCookiePolicy();

                app.UseMvc();*/

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                  !Path.HasExtension(context.Request.Path.Value) &&
                  !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }

            });

            app.UseAuthentication();
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();


        }
    }
}
