using Bookstore.Models;
using Microsoft.EntityFrameworkCore;

namespace Bookstore.Data
{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options) : base(options)
        {
            Database.EnsureCreated();


        }

        public DbSet<Book> Books { get; set; }

        public DbSet<Reservation> Reservations { get; set; }
    }
}
