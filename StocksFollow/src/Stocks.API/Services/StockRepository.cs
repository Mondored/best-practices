using Microsoft.EntityFrameworkCore;
using Stocks.API.Context;
using Stocks.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stocks.API.Services
{
    public class StockRepository : IStockRepository, IDisposable
    {
        private StockContext _context;

        public StockRepository(StockContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(StockContext));
        }

        public  Task<Stock> GetStockAsync(string stockSymbol)
        {
            return  _context.Stocks.Include(s => s.StockSymbol)
                .FirstOrDefaultAsync(s => s.StockSymbol == stockSymbol);
        }

        public async Task<IEnumerable<Stock>> GetStocksAsync()
        {
            return await _context.Stocks.Include(s => s.StockSymbol).ToListAsync();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_context != null)
                {
                    _context.Dispose();
                    _context = null;
                }
            }
        }
    }
}
