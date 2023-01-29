using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bookstore.Models
{
    public class Reservation
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ReservationNo { get; set; }

        [ForeignKey("Book")]
        public string Id { get; set; }
        public virtual Book? Book { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string ContactNumber { get; set; }
    }
}
