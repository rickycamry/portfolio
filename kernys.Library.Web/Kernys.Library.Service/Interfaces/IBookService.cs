using System.Collections.Generic;
using kernys.Library.Core.Models;

namespace Kernys.Library.Service.Interfaces
{



    public interface IBookService
{
 
      IList<Book> GetBooks();
      IList<Book> GetUserBooks(string libraryUserId);
      Book GetUserBook(int bookId,string libraryUserId);


      Book GetBookById(int id);

      Book AddBook(Book book,string libraryUserId);

      Book UpdateBook(Book book);

      void DeleteBook(int id, string libraryUserId);
}




}