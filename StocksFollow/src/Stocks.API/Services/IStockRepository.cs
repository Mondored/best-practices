using System.Collections.Generic;
using System.Threading.Tasks;

namespace Stocks.API.Services
{
    public interface IStockRepository
    {
        Task<IEnumerable<Entities.Stock>> GetStocksAsync();

        Task<Entities.Stock> GetStockAsync(string StockSymbol);
    }
}
