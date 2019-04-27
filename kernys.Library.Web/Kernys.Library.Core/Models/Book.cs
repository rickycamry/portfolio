using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace kernys.Library.Core.Models
{

    public class Book
    {

        public int Id { get; set; }
        [Required]
        public string ISBN { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Language { get; set; }
        public string PhotoUrl { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public int Year { get; set; }
        public int? PublisherId { get; set; }
        
        public string LibraryUserId { get; set; }

        public virtual LibraryUser LibraryUser { get; set; }
        public virtual Publisher Publisher { get; set; }
        public List<AuthorBook> AuthorBooks { get; set; }

    }


}
