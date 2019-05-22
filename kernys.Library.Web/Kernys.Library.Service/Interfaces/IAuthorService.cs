using kernys.Library.Core.Models;
using System.Collections.Generic;

namespace Kernys.Library.Service.Interfaces
{

    public interface IAuthorService
    {


        ///New chenges

        /// <summary>
        /// Get the authors on the DB
        /// </summary>
        /// <returns>List of Author</returns>
        IList<Author> GetAuthors();

        /// <summary>
        /// Get all the authors by book id
        /// </summary>
        /// <param name="bookId">Book id</param>
        /// <returns>Return the book's authors</returns>
        IList<Author> GetAuthorByBookId(int bookId);

        /// <summary>
        /// Get author by AuthorId
        /// </summary>
        /// <param name="id">Author Id</param>
        /// <returns>The new author</returns>
        Author GetAuthorById(int id);

        /// <summary>
        /// To add a new author
        /// </summary>
        /// <param name="author">author to add</param>
        /// <returns>the new author</returns>
        Author AddAuthor(Author author);


        /// <summary>
        /// Method to add an author to a book
        /// </summary>
        /// <param name="bookId">Book id</param>
        /// <param name="author">Author id</param>
        /// <returns>Return the author added</returns>
        Author AddAuthorToBook(int bookId, Author author);


        /// <summary>
        /// Update an existing author
        /// </summary>
        /// <param name="author">author</param>
        /// <returns>the updated author</returns>
        Author UpdateAuthor(Author author);
        /// <summary>
        /// Delete an author
        /// </summary>
        /// <param name="author">The author to delete</param>
        void DeleteAuthor(Author author);
    }




}