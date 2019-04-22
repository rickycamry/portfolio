using System.Collections.Generic;
using kernys.Library.Core.Models;

namespace Kernys.Library.Service.Interfaces
{



    public interface IBookService
{

      IList<Book> GetBooks();
      Book GetBookById(int id);

      Book AddBook(Book book);

      Book UpdateBook(Book book);

      void DeleteBook(int id);
}




}