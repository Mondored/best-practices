using System;

namespace ConsoleApp2
{
    class PaperStrip
    {
        public static int MinPieces(int[] original, int[] desired)
        {
            int cuts = 0;
            int[] vs = new int[original.Length];
            for (int i = 0; i < desired.Length-1; i++)
            {
                if ((original[i] == desired[i] && original[i+1] != desired[i+1])
                    || (original[i] != desired[i] && original[i + 1] == desired[i + 1])
                    || (original[i] != desired[i] && original[i + 1] != desired[i + 1]))
                {
                    cuts++;
                }

            }
            return cuts;
        }

        static void Main(string[] args)
        {
            int[] original = new int[] { 1, 4, 3, 2, 7, 8, 10 };
            int[] desired = new int[] { 1, 2, 4, 3, 7, 8, 10 };
            Console.WriteLine(PaperStrip.MinPieces(original, desired));

            Console.ReadKey();
        }
    }
}
