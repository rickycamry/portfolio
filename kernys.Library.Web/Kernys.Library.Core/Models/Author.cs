using System.Collections.Generic;

namespace kernys.Library.Core.Models{

public class Author{
public int Id { get; set; }

public string PhotoUrl { get; set; }
public string FirstName { get; set; } 

public string LastName { get; set; }

public string Biography { get; set; }

public virtual List<AuthorBook> AuthorBooks { get; set; }
 
}

}
