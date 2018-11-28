using System;
using System.Collections.Generic;
using System.Linq;

namespace Linq
{
    public class FourOther
    {
        public FourOther()
        {
            Four();
        }

        private void Four()
        {
            var list1 = new List<int>
            {
                3, 5, 9, 10, 14, 19
            };
            var list2 = new List<int>();

            bool hasAny = list1.Any(x => x == 3);
            bool hasAny2 = list2.Any(x => x == 4);

            Console.WriteLine($"list1 has a member of 3? {hasAny} and list2 has a member of 4? {hasAny2}");
            Console.WriteLine("\n ------------------------------------\n");
            var take5 = list1.Take(5)
                .Select(x => x * 10);

            foreach (var number in take5)
                Console.Write(number + " ");
            Console.WriteLine("\n ------------------------------------\n");

            var codes = new List<string>
            {
                "AL", "AK", "AZ", "AR", "CA"
            };
            var states = new List<string>
            {
                "Alabama",
                "Alaska",
                "Arizona",
                "Arkansas",
                "California"
            };

            var codesWithStates =
                codes.Zip(states, (code, state) => $"{code} : {state}");

            foreach (var number in codesWithStates)
                Console.WriteLine(number);
        }
    }
}
