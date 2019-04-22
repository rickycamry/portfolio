using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace kernys.Library.Core.Models
{

    public class LibraryUser:IdentityUser
    {

       
        [Required]
        public string DisplayName { get; set; }

    }

}