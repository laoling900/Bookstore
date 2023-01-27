using Bookstore.Models;
using System.Xml.Linq;

namespace Bookstore.Data
{
    public static class SeedData
    {

        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<BookContext>();

            //Check the database exits data or not
            if (context.Books.Any())
            {
                Console.WriteLine("Database already has data ,loading the system now......");
                return;
            }


            Book CQRS = new Book 
            {
                Id = "9b0896fa-3880-4c2e-bfd6-925c87f22878",
                Name = "CQRS for Dummies",
            };
            Book Visual = new Book
            {
                Id = "0550818d-36ad-4a8d-9c3a-a715bf15de76",
                Name = "Visual Studio Tips",
            };

            Book NHibernate = new Book
            {
                Id = "8e0f11f1-be5c-4dbc-8012-c19ce8cbe8e1",
                Name = "NHibernate Cookbook",
            };
                
            context.Books.Add(CQRS);
            context.Books.Add(Visual);
            context.Books.Add(NHibernate);

            context.SaveChanges();

        }
    }
}
