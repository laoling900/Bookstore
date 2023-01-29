using Bookstore.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ReservationController(IMediator mediator) => _mediator = mediator;


        [HttpGet]
        public async Task<IEnumerable<Reservation>> GetReservations() => await _mediator.Send(new GetReservations.Query());

        [HttpGet("{id}")]
        public async Task<IEnumerable<Reservation>> GetReservation(string id) => await _mediator.Send(new GetReservationByBookId.Query { Id = id });

        [HttpPost]
        public async Task<ActionResult> CreateReservation([FromBody] AddNewReservation.Command command)
        {
            var createReservationNo = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetReservation), new { reservationNo = createReservationNo }, null);
        }
    }
}
