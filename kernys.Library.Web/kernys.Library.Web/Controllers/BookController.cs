using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kernys.Library.Web.ViewModel;
using Kernys.Library.Service.Interfaces;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace kernys.Library.Web.Controllers
{
    [Route("api/[controller]")]
    public class BookController : BaseController
    {

      public static List<BookViewModel> books;
     

    public IBookService _service;
 
     public BookController(IBookService service)
     {
         this._service=service;
     }


        [HttpGet]
        public IActionResult Get()
        {

            var b=this._service.GetBooks();
            var books=b.Adapt<BookViewModel[]>();
           
             return Json(books,this.JsonFormat);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
           var b=this._service.GetBookById(id);
           var book=b.Adapt<BookViewModel>();
               book.Authors=b.AuthorBooks.Select(x=>x.Author).Adapt<AuthorViewModel[]>().ToList();

             return Json(book,this.JsonFormat);
        }


    }
}
