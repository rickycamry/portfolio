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
    public class AuthorRepository : IAuthorService
    {

        private readonly LibraryDbContext context;
        private readonly string currentLibraryUserId;

        public AuthorRepository(LibraryDbContext _context, string _currentLibraryUserId)
        {
            context = _context;
            currentLibraryUserId = _currentLibraryUserId;
        }

        public IList<Author> GetAuthors()
        {

            return context.Authors.OrderByDescending(x=>x.Id).ToList();



        }

        public IList<Author> GetAuthorByBookId(int bookId)
        {
            throw new NotImplementedException();
        }

        public Author GetAuthorById(int id)
        {


            return context.Authors
                 .Include(x => x.AuthorBooks).ThenInclude(x => x.Book)
                 .Where(x => x.Id == id).FirstOrDefault();


        }

        public Author AddAuthor(Author author)
        {

            context.Authors.Add(author);
            context.SaveChanges();

            return author;

        }

        public Author UpdateAuthor(Author author)
        {

            context.Authors.Update(author);
            context.SaveChanges();

            return author;


        }
      
        public Author AddAuthorToBook(int bookId, Author author)
        {

             
            var book = this.context.Books.Where(x => x.Id == bookId && x.LibraryUserId == this.currentLibraryUserId).First();

            if (author.Id > 0)
            {
                this.context.Authors.Update(author);
                this.context.SaveChanges();


            }
            else
            {
                this.context.Authors.Add(author);
                this.context.SaveChanges();
            }

            if(!this.context.AuthorBooks.Any(x=>x.BookId==book.Id && x.AuthorId == author.Id)){
                this.context.AuthorBooks.Add(new AuthorBook()
                {
                    Author = author,
                    Book = book
                });
                this.context.SaveChanges();

            }
           



            return author;
        }

        public void DeleteAuthor(Author author)
        {



            context.Authors.Remove(author);
            context.SaveChanges();



        }

    }
}
