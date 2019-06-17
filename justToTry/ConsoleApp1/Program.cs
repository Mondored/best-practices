using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Train<string> train = new Train<string>(10, wagonIndex => "Wagon: " + wagonIndex);

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(train.PeekWagon(i));
            }
            Console.ReadKey();
        }
    }

    public class Train<T>
    {
        private readonly Dictionary<int, object> wagons;

        public Train(int wagonCount, Func<int, T> fillWagon)
        {
            this.wagons = new Dictionary<int, object>();

            for (int i = 0; i < wagonCount; i++)
            {
                this.wagons[i] = fillWagon(i);
            }
            
        }

        public T PeekWagon(int wagonIndex)
        {
            return (T)this.wagons[wagonIndex];
        }
    }
}
