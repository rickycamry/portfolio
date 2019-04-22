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
        public AuthorRepository(LibraryDbContext _context)
        {
            context = _context;
        }

        public IList<Author> GetAuthors()
        {
           
                return context.Authors.ToList();

           

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

        public void DeleteAuthor(int id)
        {
          

                var currentAuthor = context.Authors.Where(x => x.Id == id).FirstOrDefault();

                context.Authors.Remove(currentAuthor);
                context.SaveChanges();

            

        }



        public Author UpdateAuthor(Author author)
        {
            
                var currentAuthor = context.Authors.Find(author.Id);
                currentAuthor.FirstName = author.FirstName;
                currentAuthor.LastName = author.LastName;
                currentAuthor.Biography = author.Biography;

                context.Authors.Update(author);
                context.SaveChanges();

                return currentAuthor;
            

        }
    }
}
