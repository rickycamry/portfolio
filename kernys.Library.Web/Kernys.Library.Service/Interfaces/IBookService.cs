using System.Collections.Generic;
using kernys.Library.Core.Models;

namespace Kernys.Library.Service.Interfaces
{



    public interface IBookService
    {
        /// <summary>
        /// Method to get All books
        /// </summary>
        /// <returns>List of books</returns>
        IList<Book> GetBooks();
        /// <summary>
        /// To get all the books of the current user.
        /// </summary>
        /// <returns>The list of books of the current user</returns>
        IList<Book> GetUserBooks();
        /// <summary>
        /// Method to get an especify book by bookId.
        /// </summary>
        /// <param name="bookId">BookId</param>
        /// <returns>Book</returns>
        Book GetUserBook(int bookId);

        /// <summary>
        /// Return a book by book Id
        /// </summary>
        /// <param name="id">book Id</param>
        /// <returns>a book</returns>
        Book GetBookById(int id);
        /// <summary>
        /// Add new book
        /// </summary>
        /// <param name="book">Book</param>
        /// <returns>Return the new book</returns>
        Book AddBook(Book book);

        /// <summary>
        /// To update a book
        /// </summary>
        /// <param name="book">Book</param>
        /// <returns>Return the updated book</returns>
        Book UpdateBook(Book book);

        /// <summary>
        /// Delete a book
        /// </summary>
        /// <param name="book">Book</param>
        void DeleteBook(Book book);


        /// <summary>
        /// Remove author from Book
        /// </summary>
        /// <param name="bookId">Book id</param>
        /// <param name="authorId">Author id</param>
        void RemoveAuthorFromBook(int bookId, int authorId);
    }




}