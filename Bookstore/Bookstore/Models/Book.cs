using System.ComponentModel.DataAnnotations;


namespace Bookstore.Models
{
    public class Book
    {

        //public Book(string id, string name) 
        //{ 
        //    this.Id = id;
        //    this.Name = name;   
        //}

        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }
        

    }
}
