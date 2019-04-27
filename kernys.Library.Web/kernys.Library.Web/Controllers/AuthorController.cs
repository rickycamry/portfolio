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

namespace kernys.Library.Web.Controllers
{
    [Route("api/[controller]")]
    public class AuthorController : BaseController
    {


        private IAuthorService _service;
        public AuthorController(IAuthorService service,UserManager<LibraryUser> userManager)
        :base(userManager)
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

                return new StatusCodeResult(400);
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

                return new StatusCodeResult(400);
            }
        }

        [HttpPost()]
        public IActionResult Post([FromBody]Author model)
        {

            var vm = this._service.AddAuthor(model);

            return Json(vm, new Newtonsoft.Json.JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            });

        }

        [HttpPut()]
        public IActionResult Put([FromBody]Author model)
        {

            //TO DO:
            var vm = this._service.UpdateAuthor(model).Adapt<AuthorViewModel>();

            return Json(vm, new Newtonsoft.Json.JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            });

        }

        [HttpDelete()]
        public IActionResult Delete(int id)
        {

            this._service.DeleteAuthor(id);

            return Ok();
        }




    }
}
