using Bookstore.Models;
using Bookstore.Repository;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class BooksController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BooksController(IMediator _mediator)
        {
            _mediator = _mediator;
        }

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
