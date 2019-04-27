using System.ComponentModel.DataAnnotations;

namespace kernys.Library.Web.ViewModel
{

    public class BookCreateViewModel
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

    }
}