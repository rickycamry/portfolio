using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kernys.Library.Core.Models;
using kernys.Library.Web.ViewModel;
using Kernys.Library.Service.Interfaces;
using Mapster;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace kernys.Library.Web.Controllers
{
    [Route("api/[controller]")]
    public class AuthorController : BaseController
    {


        private IAuthorService _service;
        public AuthorController(IAuthorService service, UserManager<LibraryUser> userManager)
        : base(userManager)
        {
            this._service = service;
        }


        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get()
        {
            try
            {
                var authors = this._service.GetAuthors().Adapt<Author[]>();
                return Json(authors, new Newtonsoft.Json.JsonSerializerSettings
                {
                    Formatting = Formatting.Indented
                });

            }
            catch (Exception e)
            {

                return new StatusCodeResult(StatusCodes.Status400BadRequest);

            }
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public IActionResult Get(int id)
        {
            try
            {
                var a = this._service.GetAuthorById(id);
                var author = a.Adapt<AuthorViewModel>();
                author.Books = a.AuthorBooks.Select(x => x.Book).Adapt<BookViewModel[]>().ToList();

                return Json(author, new Newtonsoft.Json.JsonSerializerSettings
                {
                    Formatting = Formatting.Indented
                });
            }
            catch (Exception e)
            {

                return new StatusCodeResult(StatusCodes.Status400BadRequest);

            }
        }

        [HttpPost()]
        public IActionResult Post([FromBody]AuthorViewModel model)
        {
            try
            {
                var vm = this._service.AddAuthor(model.Adapt<Author>()).Adapt<AuthorViewModel>();

                return Json(vm, new Newtonsoft.Json.JsonSerializerSettings
                {
                    Formatting = Formatting.Indented
                });

            }
            catch (Exception e)
            {

                return new StatusCodeResult(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPut()]
        public IActionResult Put([FromBody]AuthorViewModel model)
        {
            try
            {

                //TO DO:
                var vm = this._service.UpdateAuthor(model.Adapt<Author>()).Adapt<AuthorViewModel>();

                return Json(vm, new Newtonsoft.Json.JsonSerializerSettings
                {
                    Formatting = Formatting.Indented
                });

            }
            catch (Exception e)
            {
                
               return new StatusCodeResult(StatusCodes.Status400BadRequest);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var author = this._service.GetAuthorById(id);

                this._service.DeleteAuthor(author);

                return Ok();

            }
            catch (Exception e)
            {

             
               return new StatusCodeResult(StatusCodes.Status400BadRequest);
            }
        }




    }
}
