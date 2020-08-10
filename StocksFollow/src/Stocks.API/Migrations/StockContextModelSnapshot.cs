﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Stocks.API.Context;

namespace Stocks.API.Migrations
{
    [DbContext(typeof(StockContext))]
    partial class StockContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6");

            modelBuilder.Entity("Stocks.API.Entities.Stock", b =>
                {
                    b.Property<string>("StockSymbol")
                        .HasColumnType("TEXT");

                    b.Property<double>("BasePrice")
                        .HasColumnType("REAL");

                    b.Property<int>("Shares")
                        .HasColumnType("INTEGER");

                    b.Property<string>("StockName")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(150);

                    b.Property<double>("UsdHufConvert")
                        .HasColumnType("REAL");

                    b.HasKey("StockSymbol");

                    b.ToTable("Stocks");
                });
#pragma warning restore 612, 618
        }
    }
}
