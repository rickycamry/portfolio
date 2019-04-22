using System.Collections.Generic;

namespace kernys.Library.Core.Models{

public class Book{

public int Id { get; set; }
public string ISBN { get; set; } 
public string Title { get; set; }
public string Description { get; set; }
public string Language { get; set; }
public string PhotoUrl { get; set; }
public decimal Price { get; set; }
public int Year { get; set; }

public int PublisherId { get; set; }
public virtual Publisher  Publisher { get; set; }
public List<AuthorBook> AuthorBooks { get; set; }

}


}
