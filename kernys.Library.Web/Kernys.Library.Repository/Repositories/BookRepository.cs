using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using kernys.Library.Core.Models;
using Kernys.Library.Repository.Data;
using Kernys.Library.Service.Interfaces;
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

        public Book AddBook(Book book)
        {



            _context.Books.Add(book);

            return book;


        }

        public void DeleteBook(int id)
        {


            var currentBook = _context.Books.Where(x => x.Id == id).FirstOrDefault();
            _context.Books.Remove(currentBook);


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

        public Book UpdateBook(Book book)
        {

            _context.Books.Update(book);

            return book;


        }
    }
}
