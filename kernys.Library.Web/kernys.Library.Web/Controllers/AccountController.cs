using System;
using kernys.Library.Web.ViewModel;
using Microsoft.AspNetCore.Mvc;
using kernys.Library.Core.Models;
using Microsoft.AspNetCore.Identity;
using Mapster;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;

    namespace kernys.Library.Web.Controllers
    {
        [Route("api/[controller]")]
        [AllowAnonymous]
        public class AccountController : BaseController
        {

        private readonly SignInManager<LibraryUser> _singInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

      


        public AccountController(SignInManager<LibraryUser> singInManager,
                                 UserManager<LibraryUser> userManager,
                                 RoleManager<IdentityRole> roleManager,
                                 IConfiguration configuration):base(userManager)
        {
            this._singInManager = singInManager;
            this._roleManager = roleManager;
            this._configuration = configuration;

        }



        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel login)
        {

            try
            {
                if (ModelState.IsValid)
                {

                    var user = await _userManager.FindByNameAsync(login.UserName);

                    if (user != null)
                    {
                        var result = await _singInManager.PasswordSignInAsync(user, login.Password, false, false);
                        if (result.Succeeded)
                        {

                            var token = this.GetToken(user);
                            if (token != null)
                            {
                                return Result(token);
                                //return Result(token);
                            }

                        }
                    }

                }

                return StatusCode(StatusCodes.Status401Unauthorized, "Your email or password was incorrect.");//Result(ResultType.Validation, "Your email or password was incorrect.");

            }
            catch (Exception e)
            {


                return Result(ResultType.Error, e.Message);
            }



        }



        [HttpPost("SignUP")]
        public async Task<IActionResult> SignUP([FromBody] LibraryUserViewModel model)
        {

            try
            {
                if (ModelState.IsValid)
                {

                    var user = model.Adapt<LibraryUser>();
                    var result = await _userManager.CreateAsync(user, model.Password);



                    if (result.Succeeded)
                        return Result(ResultType.Success, string.Format("{0} have successfully registered.", model.DisplayName));

                    return StatusCode(StatusCodes.Status400BadRequest, this.IterateIdentityErrors(result.Errors));
                }

                return StatusCode(StatusCodes.Status400BadRequest, "Something went wrong!!");

            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }

        }

        private string IterateIdentityErrors(IEnumerable<IdentityError> errors)
        { 
             string error="";
            using (var sequenceEnum = errors.GetEnumerator())
            {
                while (sequenceEnum.MoveNext())
                {
                     error+=string.Format("{0} \n",sequenceEnum.Current.Description);
                }
            }
            return error;
        }

        [HttpDelete("LogOut")]
        public async Task<IActionResult> LogOut()
        {
            try
            {
                await _singInManager.SignOutAsync();


                return Result(ResultType.Ok);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }



        private TokenResponseViewModel GetToken(LibraryUser user)
        {

            try
            {



                var now = DateTime.UtcNow;

                var claims = new[]{
                 new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                 new Claim(JwtRegisteredClaimNames.Iat, new DateTimeOffset(now).ToUnixTimeSeconds().ToString()),

                 //add additional claims here
                 new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
                 new Claim(JwtRegisteredClaimNames.GivenName, user.DisplayName)

            };

                var tokenExpirationMins = _configuration.GetValue<int>("Auth:Jwt:TokenExpirationInMinutes");
                var issuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Auth:Jwt:Key"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["Auth:Jwt:Issuer"],
                    audience: _configuration["Auth:Jwt:Audience"],
                    claims: claims,
                    notBefore: now,
                    expires: now.Add(TimeSpan.FromMinutes(tokenExpirationMins)),
                    signingCredentials: new SigningCredentials(issuerSigningKey, SecurityAlgorithms.HmacSha256));

                var encodedToken = new JwtSecurityTokenHandler().WriteToken(token);

                return new TokenResponseViewModel()
                {

                    Token = encodedToken,
                    TokenExpirationMinutes = tokenExpirationMins,
                    DisplayName = user.DisplayName
                };



            }
            catch (Exception e)
            {

                return null;
            }


        }



    }


}