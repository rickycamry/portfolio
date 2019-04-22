using System.Collections.Generic;
using kernys.Library.Core.Models;

namespace Kernys.Library.Service.Interfaces { 


    public interface IPublisherService
{

      IList<Publisher> GetPublishers();
      Publisher GetPublisherById();

      Publisher AddPublisher();

      Publisher UpdatePublisher();

      void DeletePublisher();
}




}