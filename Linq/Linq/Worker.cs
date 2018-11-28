using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Linq
{
    public class Worker
    {
        public Worker()
        {
            Work();
        }

        public void Work()
        {
            var listOfInt = new List<int>
            {
                3, 5, 87, 45, 7, 8, 23, 9
            };

            var smallerNumbers = from num in listOfInt
                                 where num < 9
                                 select num;

            foreach (int number in smallerNumbers)
            {
                Console.WriteLine($"Value: {number}");
            }
            //*******************************************************
            Console.WriteLine("\n ------------------------------------\n");

            var biggerNumber = listOfInt
                .Where(n => n > 9)
                .Select(n => n);

            foreach (int number in biggerNumber)
            {
                Console.WriteLine($"Value: {number}");
            }
            Console.WriteLine("\n ------------------------------------\n");
            //*******************************************************

            var methods = from method in typeof(int).GetMethods()
                          orderby method.Name
                          group method by method.Name into groups
                          select new
                          {
                              MethodName = groups.Key,
                              MethodOverloads = groups.Count()
                          };

            foreach (var item in methods)
                Console.WriteLine(item);
            Console.WriteLine("\n ------------------------------------\n");
            //*******************************************************

            var million = Enumerable.Range(0, 10)
                .Select(x =>
               {
                   Thread.Sleep(500);
                   return x * x;
               });

            foreach (var number in million)
                Console.Write(number + " ");
            Console.WriteLine("\n ------------------------------------\n");
        }
    }
}
