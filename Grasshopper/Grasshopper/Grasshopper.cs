using System.Collections.Generic;

namespace Grasshopper
{
    class Grasshopper
    {
        private int position;
        private List<int> leaves;
        /// <summary>
        /// Initialization of view field with n leaves and grasshopper on leaf 'position'.
        /// </summary>
        /// <param name="n">Number of leaves in row.</param>
        /// <param name="position">Position.</param>
        public Grasshopper(int n, int position)
        {
            this.leaves = new List<int>();
            for (int i = 0; i < n; i++)
            {
                leaves.Add(i + 1);
            }
            //for debug
            //foreach (var item in leaves)
            //{
            //    Console.Write(item + "\n");
            //}
            //Console.Write("--------------------------------\n");
            this.position = position;
        }

        /// <summary>
        /// Grasshopper has eaten the current leaf and hopped left.
        /// </summary>
        public void EatAndHopLeft()
        {
            if (leaves.IndexOf(position) - 2 >= 0)
            {
                int newPosition = int.Parse(leaves.ToArray().GetValue(leaves.IndexOf(position) - 2).ToString());
                leaves.RemoveAt(leaves.IndexOf(position));
                position = newPosition;
                //for debug
                //foreach (var item in leaves)
                //{
                //    Console.Write(item + "--------" + position + "\n");
                //}
            }
        }

        /// <summary>
        /// Grasshopper has eaten the current leaf and hopped right.
        /// </summary>
        public void EatAndHopRight()
        {
            if (leaves.Count > leaves.IndexOf(position) + 2)
            {
                int newPosition = int.Parse(leaves.ToArray().GetValue(leaves.IndexOf(position) + 2).ToString());
                leaves.RemoveAt(leaves.IndexOf(position));
                position = newPosition;
                //for debug
                //foreach (var item in leaves)
                //{
                //    Console.Write(item + "--------" + position + "\n");
                //}
            }
        }

        /// <returns>Leaf number that grasshopper is feeding on right now.</returns>
        public int WhereAmI()
        {
            return position;
        }
    }
}
