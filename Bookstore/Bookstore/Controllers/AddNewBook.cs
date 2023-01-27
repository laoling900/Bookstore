using Bookstore.Models;
using MediatR;

namespace Bookstore.Controllers
{
    public class AddNewBook
    {
        public class Command : IRequest<string> 
        { 
            public string Id { get; set; }  
            public string Name { get; set; }    

        }

        public class CommandHandler : IRequestHandler<Command, string>
        {
            private readonly BookContext _db;
            public CommandHandler(BookContext db)
            {
                this._db = db;
            }

            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                var entity = new Book
                {
                    Id = request.Id,
                    Name = request.Name,
                };

                await _db.Books.AddAsync(entity, cancellationToken);    
                await _db.SaveChangesAsync();

                return entity.Id;
            }
        }
    }
}
