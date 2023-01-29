using Bookstore.Data;
using Bookstore.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Bookstore.Controllers
{
    public class GetReservationByBookId
    {
        public class Query : IRequest<IEnumerable<Reservation>>
        {
            public string Id { get; set; }
        }

        public class QueryHandler: IRequestHandler<Query, IEnumerable<Reservation>> 
        {
            private readonly BookContext _db;

            public QueryHandler(BookContext db)
            {
                _db = db;
            }

            public async Task<IEnumerable<Reservation>> Handle(Query request, CancellationToken cancellationToken)
            {
                

                return await _db.Reservations.Where(x => x.Id == request.Id).ToListAsync(cancellationToken);
            }
        }

    }


}
