using System.Collections.Generic;
using kernys.Library.Core.Models;

namespace Kernys.Library.Service.Interfaces
{


    public interface IPublisherService
    {
        /// <summary>
        /// Return all the publisher
        /// </summary>
        /// <returns>List of Publisher</returns>
        IList<Publisher> GetPublishers();
        /// <summary>
        /// To get a publisher by id
        /// </summary>
        /// <param name="publisherId">The publisher id</param>
        /// <returns>Return a Publisher</returns>
        Publisher GetPublisherById(int publisherId);
        /// <summary>
        /// Return a publisher by book id.
        /// </summary>
        /// <param name="bookId">the book id</param>
        /// <returns>Return a publisher</returns>
        Publisher GetPublisherByBookId(int bookId);

        /// <summary>
        /// To add a publisher to a book
        /// </summary>
        /// <param name="publisher">The publisher</param>
        /// <param name="bookId">the book id</param>
        /// <returns>Return a book</returns>
        Publisher AddPublisher(Publisher publisher, int bookId);

        /// <summary>
        /// To modify the book publisher
        /// </summary>
        /// <param name="publisher">Publisher</param>
        /// <param name="bookId">BookId</param>
        /// <returns>Return a publisher</returns>

        Publisher UpdatePublisher(Publisher publisher, int bookId);
        /// <summary>
        /// Remove a publisher from a book
        /// </summary>
        /// <param name="publisherId">Publisher Id</param>
        /// <param name="bookId">Book Id</param>
        void RemovePublisherFromBook(int publisherId, int bookId);
        /// <summary>
        /// To delete a publisher
        /// </summary>
        /// <param name="publisherId">Publisher id</param>
        /// <param name="bookId">Book id</param>
        void DeletePublisher(int publisherId, int bookId);
    }




}