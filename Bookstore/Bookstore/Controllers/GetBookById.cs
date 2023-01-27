using Bookstore.Models;
using MediatR;

namespace Bookstore.Controllers
{
    public class GetBookById
    {
        public class Query : IRequest<Book>
        {
            public string Id { get; set; }
        }

        public class QueryHandler: IRequestHandler<Query,Book> 
        {
            private readonly BookContext _db;
            public QueryHandler(BookContext db)
            {
                this._db = db;
            }

            public async Task<Book> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _db.Books.FindAsync(request.Id);
            }

        }
    }
}
