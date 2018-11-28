using System;

namespace Grasshopper
{
    class Program
    {
        /*
         * Imagine a row of leaves (numbered 1 to N) and a grasshopper feeding on leaf X. After he eats
         * leaf X , he will move either two leaves to the left of two leaves to the right, skipping the 
         * leaves he ate. The grasshopper will always move to an existing leaf.
         * 
         * Implement a class that models the grasshopper's behaviour and can repoort its location at
         * any time.
         * 
         * For example, new Grasshopper(5,2) creates a scenario with a row of 5 leaves (numbered 1 to 5)
         * and a grasshopper feeding on leaf 2 (1 2* 3 4 5). A call to EatAndHopRight() marks the current
         * leaf (leaf2) as eaten and moves the grasshopper two leaves to the right to leaf 4 (1 3 4* 5).
         * A call to EatAndHopLeft() marks the current leaf (leaf 4) as eaten and moves the grasshopper
         * two leaves to the left to leaf 1 (1* 3 5), skipping leaves marked as eaten.
         * 
         * Note: The grasshopper will not move if there are no leaves left to move to
        */

        public static void Main(string[] args)
        {
            Grasshopper g = new Grasshopper(10, 2);
            Console.WriteLine("WhereAmI:" + g.WhereAmI());

            g.EatAndHopRight();
            Console.WriteLine("WhereAmI:" + g.WhereAmI());

            g.EatAndHopLeft();
            Console.WriteLine("WhereAmI:" + g.WhereAmI());

            Console.ReadKey();
        }
    }
}
