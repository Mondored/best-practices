using System;

namespace SimpleClass_Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee tony = new Employee(150000,8);
            tony.Income = 150000;
            tony.YearsOfService = 8;
            tony.SetRating(Employee.Rating.excellent);
            tony.CalculateRaise();

            Employee sam = new Employee()
            {
                Income = 145000,
                YearsOfService = 3
            };

            sam.SetRating(Employee.Rating.good);
            sam.CalculateRaise();

            Console.ReadKey();
        }
    }
}
