using Microsoft.EntityFrameworkCore;
using Stocks.API.Entities;

namespace Stocks.API.Context
{
    public class StockContext :DbContext
    {
        public DbSet<Stock> Stocks { get; set; }

        public StockContext(DbContextOptions<StockContext> options)
            : base(options)
        {
        }
    }
}
