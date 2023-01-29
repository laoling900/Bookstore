using System.ComponentModel.DataAnnotations;
namespace Bookstore.Models
{
    public class Reservation
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string ContactNumber { get; set; }
    }
}
