using kernys.Library.Core.Models;
using System.Collections.Generic;

namespace Kernys.Library.Service.Interfaces { 

public interface IAuthorService
{

      IList<Author> GetAuthors();
      Author GetAuthorById(int id);

      Author AddAuthor(Author author);

      Author UpdateAuthor(Author author);

      void DeleteAuthor(int id);
}




}