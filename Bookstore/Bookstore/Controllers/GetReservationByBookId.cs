using Bookstore.Data;
using Bookstore.Models;
using MediatR;

namespace Bookstore.Controllers
{
    public class GetReservationByBookId
    {
        public class Query : IRequest<Reservation>
        {
            public string Id { get; set; }
        }

        public class QueryHandler: IRequestHandler<Query, Reservation> 
        {
            private readonly BookContext _db;

            public QueryHandler(BookContext db)
            {
                _db = db;
            }

            public async Task<Reservation> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _db.Reservations.FindAsync(request.Id);
            }
        }

    }


}
