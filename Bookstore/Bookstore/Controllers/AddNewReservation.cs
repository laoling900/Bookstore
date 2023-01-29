using Bookstore.Data;
using Bookstore.Models;
using MediatR;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Bookstore.Controllers
{
    public class AddNewReservation
    {
        public class Command : IRequest<Reservation> 
        {
            public string? Id { get; set; }
            public string? Email { get; set; }
            public string? ContactNumber { get; set;}
        }


        public class CommandHandler : IRequestHandler<Command, Reservation>
        {
            private readonly BookContext _db;

            public CommandHandler(BookContext db)  => this._db= db;



            public async Task<Reservation> Handle(Command request, CancellationToken cancellationToken)
            {
                var entity = new Reservation
                {
                    
                    Id = request.Id,
                    Email = request.Email,
                    ContactNumber = request.ContactNumber,
                };

                await _db.Reservations.AddAsync(entity,cancellationToken);
                await _db.SaveChangesAsync();


                return entity;
            }

        }
    }
}
