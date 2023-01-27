using System.ComponentModel.DataAnnotations;
namespace Bookstore.Models
{
    public class Reservation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public int ContactNumber { get; set; }
    }
}
