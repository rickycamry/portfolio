using System.Collections.Generic;
using kernys.Library.Web.ViewModel;

namespace kernys.Library.Web.ViewModel{

public class AuthorViewModel{

public string PhotoUrl { get; set; }
public int Id { get; set; }
public string FirstName { get; set; } 

public string LastName { get; set; }

public string Biography { get; set; }

public List<BookViewModel> Books { get; set; }
 
}


}
