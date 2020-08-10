using Microsoft.EntityFrameworkCore.Migrations;

namespace Stocks.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stocks",
                columns: table => new
                {
                    StockSymbol = table.Column<string>(nullable: false),
                    StockName = table.Column<string>(maxLength: 150, nullable: false),
                    UsdHufConvert = table.Column<double>(nullable: false),
                    BasePrice = table.Column<double>(nullable: false),
                    Shares = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stocks", x => x.StockSymbol);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stocks");
        }
    }
}
