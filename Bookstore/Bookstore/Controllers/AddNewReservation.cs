using Bookstore.Data;
using Bookstore.Models;
using MediatR;


namespace Bookstore.Controllers
{
    public class AddNewReservation
    {
        public class Command : IRequest<string> 
        {
            public string? Id { get; set; }
            public string? Email { get; set; }
            public string? ContactNumber { get; set;}
        }


        public class CommandHandler : IRequestHandler<Command, string>
        {
            private readonly BookContext _db;

            public CommandHandler(BookContext db)  => this._db= db;



            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                var entity = new Reservation
                {   
                    Id = request.Id,
                    Email = request.Email,
                    ContactNumber = request.ContactNumber,
                };

                await _db.Reservations.AddAsync(entity,cancellationToken);
                await _db.SaveChangesAsync();

                return entity.Id;
            }

        }
    }
}
