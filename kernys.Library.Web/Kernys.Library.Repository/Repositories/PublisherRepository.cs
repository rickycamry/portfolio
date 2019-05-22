using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using kernys.Library.Core.Models;
using Kernys.Library.Repository.Data;
using Kernys.Library.Service.Interfaces;

namespace Kernys.Library.Repository.Repositories
{
    public class PublisherRepository : IPublisherService
    {

        private readonly LibraryDbContext _context;
        private string currentLibraryUserId;

        public PublisherRepository(LibraryDbContext context, string _currentLibraryUserId)
        {
            _context = context;
            currentLibraryUserId = _currentLibraryUserId;
        }


        public IList<Publisher> GetPublishers()
        {
            return this._context.Publishers.ToList();
        }

        public Publisher GetPublisherById(int publisherId)
        {
            return this._context.Publishers.Where(x => x.Id == publisherId).FirstOrDefault();
        }

        public Publisher GetPublisherByBookId(int bookId)
        {
            return this._context.Books.Where(x => x.Id == bookId).Select(x => x.Publisher).FirstOrDefault();
        }

        public Publisher AddPublisher(Publisher publisher, int bookId)
        {


            var book = this._context.Books.Where(x => x.Id == bookId && x.LibraryUserId == this.currentLibraryUserId).First();
            book.Publisher = publisher;
            this._context.Books.Update(book);
            this._context.SaveChanges();

            return book.Publisher;

        }

        public Publisher UpdatePublisher(Publisher publisher, int bookId)
        {
            var pub = this._context.Books.Where(x => x.Id == bookId && x.PublisherId == publisher.Id && x.LibraryUserId == this.currentLibraryUserId).Select(x => x.Publisher).First();

            pub.Name = publisher.Name;
            pub.City = publisher.City;
            pub.Country = publisher.Country;
            this._context.Publishers.Update(pub);
            this._context.SaveChanges();

            return pub;
        }

        public void RemovePublisherFromBook(int publisherId, int bookId)
        {
            var book = this._context.Books.Where(x => x.Id == bookId && x.PublisherId == publisherId).First();
            book.PublisherId = null;
            book.Publisher = null;
            this._context.Books.Update(book);
            this._context.SaveChanges();
        }

        public void DeletePublisher(int publisherId, int bookId)
        {

            if (this._context.Books.Any(x => x.PublisherId == publisherId
                                                      && x.Id == bookId &&
                                                      x.LibraryUserId == this.currentLibraryUserId))
            {

                var publisher = this._context.Publishers.Where(x => x.Id == publisherId);
                this._context.Remove(publisher);
                this._context.SaveChanges();

            }
        }
    }
}
