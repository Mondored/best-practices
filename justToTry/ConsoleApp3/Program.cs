using System;

namespace ConsoleApp3
{
    class Boxes
    {
        public static int MinimalNumberOfBoxes(int products, int availableLargeBoxes, int availableSmallBoxes)
        {
            int numberOfBoxes = 0;
            while( products > 0)
            {
                if (products > 5 && availableLargeBoxes > 0)
                {
                    products = products - 5;
                    availableLargeBoxes--;
                    numberOfBoxes++;
                }

                if (availableSmallBoxes > 0 && availableLargeBoxes == 0)
                {
                    products--;
                    availableSmallBoxes--;
                    numberOfBoxes++;
                }

                if (products > 0 && availableSmallBoxes == 0 && availableLargeBoxes == 0)
                {
                    numberOfBoxes = -1;
                    products = 0;
                }
            }
            return numberOfBoxes;
        }

        public static void Main(string[] args)
        {
            Console.WriteLine(Boxes.MinimalNumberOfBoxes(16, 2, 10));
            Console.ReadKey();
        }
    }
}
