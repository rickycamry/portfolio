using System.Collections.Generic;

namespace kernys.Library.Web.ViewModel{

public class BookViewModel{

public int Id { get; set; }
public string ISBN { get; set; } 
public string Title { get; set; }
public string Description { get; set; }
public string Language { get; set; }
public string PhotoUrl { get; set; }
public decimal Price { get; set; }
public int Year { get; set; }
public PublisherViewModel  Publisher { get; set; }
public List<AuthorViewModel> Authors { get; set; }

}


}
