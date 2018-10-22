using System;
using System.Collections.Generic;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Inputs> cList = new List<Inputs>();
            cList.Add(new Inputs(3, "Blue"));
            cList.Add(new Inputs(1, "Blue"));
            cList.Add(new Inputs(2, "Blue"));
            cList.Add(new Inputs(3, "Blue"));
            cList.Add(new Inputs(5, "Red"));
            cList.Add(new Inputs(3, "Red"));
            cList.Add(new Inputs(1, "Blue"));
            cList.Add(new Inputs(2, "Blue"));
            cList.Add(new Inputs(3, "Red"));
            cList.Add(new Inputs(2, "Blue"));

            Console.WriteLine("Input values:");
            foreach (var item in cList)
            {
                Console.WriteLine("{0},{1}", item.Number, item.Color);
            }

            List<Inputs> outputList = new List<Inputs>();
            var counter = cList[0].Number;
            for (int i = 0; i < cList.Count-1; i++)
            {
                if (cList[i].Color.Equals(cList[i + 1].Color) && i < cList.Count - 2)
                {
                    counter = counter + cList[i + 1].Number;
                }
                else
                {
                    //last 2 check
                    if (i == cList.Count - 2)
                    {
                        if (cList[i].Color.Equals(cList[i + 1].Color))
                        {
                            counter += cList[i + 1].Number;
                            outputList.Add(new Inputs(counter, cList[i].Color));
                        }
                        else
                        {
                            outputList.Add(new Inputs(counter, cList[i].Color));
                            outputList.Add(new Inputs(cList[i + 1].Number, cList[i + 1].Color));
                        }
                    }
                    else
                    {
                        outputList.Add(new Inputs(counter, cList[i].Color));
                        counter = cList[i + 1].Number;
                    }
                }
            }

            Console.WriteLine("\nOutput values:");
            foreach (var item in outputList)
            {
                Console.WriteLine("{0}, {1}", item.Number, item.Color);
            }

            Console.ReadLine();
        }
    }
}
