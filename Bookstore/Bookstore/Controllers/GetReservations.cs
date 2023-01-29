using MediatR;
using Bookstore.Models;
using Microsoft.EntityFrameworkCore;
using Bookstore.Data;


namespace Bookstore.Controllers
{
    public class GetReservations
    {

        public class Query : IRequest<IEnumerable<Reservation>> { }


        public class QueryHandler: IRequestHandler<Query, IEnumerable<Reservation>>
        {
            private readonly BookContext _db;

            public QueryHandler(BookContext db) => _db = db;

            public async Task<IEnumerable<Reservation>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _db.Reservations.ToListAsync(cancellationToken);
            }
        }



    }
}
