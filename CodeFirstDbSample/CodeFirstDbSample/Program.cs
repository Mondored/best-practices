using CodeFirstDbSample.Model;
using System;
using System.Linq;

namespace CodeFirstDbSample
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new BlogContext())
            {
                Console.Write("Enter a name for a new blog:");
                var name = Console.ReadLine();

                var blog = new Blog { Name = name };
                db.Blogs.Add(blog);
                db.SaveChanges();

                var query = from b in db.Blogs
                            orderby b.Name
                            select b;

                foreach (var item in query)
                {
                    Console.WriteLine(item.Name);
                }
            }
        }
    }
}
