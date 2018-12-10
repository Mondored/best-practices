using System.Collections.Generic;

namespace Grasshopper
{
    class Grasshopper
    {
        private int _position;
        private List<int> _leaves;
        /// <summary>
        /// Initialization of view field with n leaves and grasshopper on leaf 'position'.
        /// </summary>
        /// <param name="n">Number of leaves in row.</param>
        /// <param name="position">Position.</param>
        public Grasshopper(int n, int position)
        {
            this._leaves = new List<int>();
            for (int i = 0; i < n; i++)
            {
                _leaves.Add(i + 1);
            }
            //for debug
            //foreach (var item in leaves)
            //{
            //    Console.Write(item + "\n");
            //}
            //Console.Write("--------------------------------\n");
            this._position = position;
        }

        /// <summary>
        /// Grasshopper has eaten the current leaf and hopped left.
        /// </summary>
        public void EatAndHopLeft()
        {
            if (_leaves.IndexOf(_position) - 2 >= 0)
            {
                int newPosition = int.Parse(_leaves.ToArray().GetValue(_leaves.IndexOf(_position) - 2).ToString());
                _leaves.RemoveAt(_leaves.IndexOf(_position));
                _position = newPosition;
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
            if (_leaves.Count > _leaves.IndexOf(_position) + 2)
            {
                int newPosition = int.Parse(_leaves.ToArray().GetValue(_leaves.IndexOf(_position) + 2).ToString());
                _leaves.RemoveAt(_leaves.IndexOf(_position));
                _position = newPosition;
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
            return _position;
        }
    }
}
