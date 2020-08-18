using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Stocks.API.Entities
{
    [Table("Stocks")]
    public class Stock
    {
        public int Id { get; set; }

        [Key]
        [Required]
        public string StockSymbol { get; set; }

        [Required]
        [MaxLength(150)]
        public string StockName { get; set; }

        public double UsdHufConvert { get; set; }

        public double BasePrice { get; set; }

        public int Shares { get; set; }

        public double? Devidend { get; set; }
    }
}
