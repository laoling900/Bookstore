﻿using MediatR;
using Bookstore.Models;
using Microsoft.EntityFrameworkCore;
using Bookstore.Data;

namespace Bookstore.Controllers
{
    public class GetBooks
    {
        public class Query : IRequest<IEnumerable<Book>>
        {

        }

        public class QueryHandler: IRequestHandler<Query, IEnumerable<Book>> 
        {   
            private readonly BookContext _db;
            public QueryHandler(BookContext db) => _db = db;

            public  async Task<IEnumerable<Book>> Handle(Query request, CancellationToken cancellationToken) 
            { 
            return await _db.Books.ToListAsync(cancellationToken);
            }
        }
    }
}
