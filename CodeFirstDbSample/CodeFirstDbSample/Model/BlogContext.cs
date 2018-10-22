using Microsoft.EntityFrameworkCore;

namespace CodeFirstDbSample.Model
{
    public class BlogContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=DESKTOP-29RTTTB\SQLEXPRESS01;
                  Database=EFGetStarted.ConsoleApp.NewDb;
                  Trusted_Connection=True;");
        }
    }
}
