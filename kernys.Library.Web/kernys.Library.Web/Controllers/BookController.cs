using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using kernys.Library.Core.Models;
using kernys.Library.Web.ViewModel;
using Kernys.Library.Service.Interfaces;
using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace kernys.Library.Web.Controllers
{
    
    [Route("api/[controller]")]
    public class BookController : BaseController
    {

        public static List<BookViewModel> books;


        public IBookService _service;

        public BookController(IBookService service, UserManager<LibraryUser> userManager)
        : base(userManager)
        {
            this._service = service;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get()
        {

            var b = this._service.GetBooks();
            var books = b.Adapt<BookViewModel[]>();

            return Json(books, this.JsonFormat);
        }

        [HttpGet]
        [Route("userbooks")]
        public IActionResult GetUserBooks()
        {

            var b = this._service.GetUserBooks();
            var books = b.Adapt<BookViewModel[]>();

            return Json(books, this.JsonFormat);
        }
        [HttpGet]
        [Route("userbook/{id}")]
        public IActionResult GetUserBook(int id)
        {

            var b = this._service.GetUserBook(id);
            var book = b.Adapt<BookViewModel>();

            return Json(book, this.JsonFormat);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
                public IActionResult Get(int id)
        {
            var b = this._service.GetBookById(id);
            var book = b.Adapt<BookViewModel>();
            book.Authors = b.AuthorBooks.Select(x => x.Author).Adapt<AuthorViewModel[]>().ToList();

            return Json(book, this.JsonFormat);
        }

        [HttpPost]
        public IActionResult Post([FromBody]BookCreateViewModel book)
        {

            try
            {
                if (ModelState.IsValid)
                {


                    var newBook = this._service.AddBook(book.Adapt<Book>());
                    return StatusCode(StatusCodes.Status200OK, book.Adapt<BookCreateViewModel>());
                }

                return StatusCode(StatusCodes.Status400BadRequest, "Bad request.");

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest, e.Message);

            }


        }

         [HttpPut]
        public IActionResult Put([FromBody]BookCreateViewModel book)
        {

            try
            {
                if (ModelState.IsValid)
                {

                  var  currentBook=this._service.GetUserBook(book.Id);
                  if(currentBook==null)
                  return StatusCode(StatusCodes.Status400BadRequest, "Bad request.");
                   currentBook.ISBN=book.ISBN;
                   currentBook.Title=book.Title;
                   currentBook.Language=book.Language;
                   currentBook.Price=book.Price;
                   currentBook.Year=book.Year;
                   currentBook.Description=book.Description;

                    var newBook = this._service.UpdateBook(currentBook);
                    return StatusCode(StatusCodes.Status200OK);
                }

                return StatusCode(StatusCodes.Status400BadRequest, "Bad request.");

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest, e.Message);

            }


        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var book = this._service.GetUserBook(id);

                    this._service.DeleteBook(book);
                    return StatusCode(StatusCodes.Status200OK);
                }

                return StatusCode(StatusCodes.Status400BadRequest, "Bad request.");

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest, e.Message);

            }



        }
    }
}


