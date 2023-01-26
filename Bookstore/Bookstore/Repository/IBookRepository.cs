using Bookstore.Models;

namespace Bookstore.Repository
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> Get();

        Task<Book> Get(string id);

        Task<Book> Create(Book book);

        Task Update(Book book);

        Task Delete(string id);
    }
}
