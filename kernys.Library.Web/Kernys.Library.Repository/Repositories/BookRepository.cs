using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using kernys.Library.Core.Models;
using Kernys.Library.Repository.Data;
using Kernys.Library.Service.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Kernys.Library.Repository.Repositories
{


    public class BookRepository : IBookService
    {

        private readonly LibraryDbContext _context;

        private string currentLibraryUserId;

        public BookRepository(LibraryDbContext context, string _currentLibraryUserId)
        {
            _context = context;
            currentLibraryUserId = _currentLibraryUserId;

        }


        public IList<Book> GetBooks()
        {


            return _context.Books.ToList();



        }

        public IList<Book> GetUserBooks()
        {
            return _context.Books.Where(x => x.LibraryUserId == this.currentLibraryUserId).ToList();
        }

        public Book AddBook(Book book)
        {


            book.LibraryUserId = this.currentLibraryUserId;
            _context.Books.Add(book);
            _context.SaveChanges();

            return book;


        }

        public Book GetBookById(int id)
        {

            return _context.Books
                           .Include(x => x.AuthorBooks).ThenInclude(x => x.Author)
                           .Include(x => x.Publisher)
                           .Where(x => x.Id == id).FirstOrDefault();


        }

        public Book GetUserBook(int bookId)
        {
            return _context.Books
                           .Include(x => x.AuthorBooks).ThenInclude(x => x.Author)
                           .Include(x => x.Publisher)
                           .Where(x => x.Id == bookId &&
                                       x.LibraryUserId == this.currentLibraryUserId).FirstOrDefault();
        }

        public Book UpdateBook(Book book)
        {
            book.LibraryUserId = this.currentLibraryUserId;

            _context.Books.Update(book);
            _context.SaveChanges();

            return book;


        }

        public void RemoveAuthorFromBook(int bookId, int authorId)
        {

            var authorBook = this._context.AuthorBooks
                                          .Where(x => x.AuthorId == authorId && x.BookId == bookId && x.Book.LibraryUserId == this.currentLibraryUserId).First();
            this._context.AuthorBooks.Remove(authorBook);
            this._context.SaveChanges();

        }

        public void DeleteBook(Book book)
        {


            _context.Books.Remove(book);
            _context.SaveChanges();


        }
    }
}
