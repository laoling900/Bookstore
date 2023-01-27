using System.ComponentModel.DataAnnotations;


namespace Bookstore.Models
{
    public class Book
    {

        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }
        

    }
}
