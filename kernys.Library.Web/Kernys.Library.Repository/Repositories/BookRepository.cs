using System;
using System.Collections.Generic;
using System.Linq;
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

    

        public BookRepository(LibraryDbContext context)
        {
            _context = context; 
        }

        public  Book AddBook(Book book, string libraryUserId)
        {


            book.LibraryUserId= libraryUserId;
            _context.Books.Add(book);
            _context.SaveChanges();

            return book;


        }

        public void DeleteBook(int id,string libraryUserId)
        {


            var currentBook = _context.Books.Where(x => x.Id == id && x.LibraryUserId==libraryUserId).FirstOrDefault();
            _context.Books.Remove(currentBook);
            _context.SaveChanges();


        }

        public Book GetBookById(int id)
        {

            return _context.Books
                           .Include(x => x.AuthorBooks).ThenInclude(x => x.Author)
                           .Include(x => x.Publisher)
                           .Where(x => x.Id == id).FirstOrDefault();


        }

        public IList<Book> GetBooks()
        {


            return _context.Books.ToList();



        }

        public Book GetUserBook(int bookId, string libraryUserId)
        {
            return _context.Books
                           .Include(x => x.AuthorBooks).ThenInclude(x => x.Author)
                           .Include(x => x.Publisher)
                           .Where(x => x.Id == bookId &&
                                       x.LibraryUserId==libraryUserId).FirstOrDefault();
        }

        public IList<Book> GetUserBooks(string libraryUserId)
        {
            return _context.Books.Where(x=>x.LibraryUserId==libraryUserId).ToList();
        }

        public Book UpdateBook(Book book)
        {
            
            _context.Books.Update(book);
            _context.SaveChanges();

            return book;


        }
    }
}
