using System.ComponentModel.DataAnnotations;

namespace kernys.Library.Web.ViewModel{


public class LibraryUserViewModel{


[Required]
public string UserName { get; set; }
[Required]
public string Email { get; set; }
[Required]
public string Password { get; set; }
[Required]
public string  DisplayName { get; set; }

}


}