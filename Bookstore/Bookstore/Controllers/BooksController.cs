using Bookstore.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace Bookstore.Controllers
    
{
    [Route("api/[controller]")]
    [ApiController]

    public class BooksController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BooksController(IMediator mediator) => _mediator = mediator;

        [HttpGet]
        public async Task<IEnumerable<Book>> GetBooks() => await _mediator.Send(new GetBooks.Query());

        [HttpGet("{id}")]
        public async Task<Book> GetBook(string id) => await _mediator.Send(new GetBookById.Query { Id = id });

        [HttpPost]
        public async Task<ActionResult> CreateBook([FromBody] AddNewBook.Command command)
        {
            var createdBookId = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetBook), new { id = createdBookId }, null);
        }

    }
}
