using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleClass_Demo
{
    public class Employee
    {
        public enum Rating
        {
            poor,
            good,
            excellent
        }

        private Rating rating;
        public double Income { get; set; }
        public int YearsOfService { get; set; }

        public Employee(double income, int yearsOfService)
        {
            Income = income;
            YearsOfService = yearsOfService;
        }

        public Employee()
        {
        }

        public void SetRating(Rating rating)
        {
            this.rating = rating;
        }

        public void CalculateRaise()
        {
            double baseRaise = Income * .05;
            double bonus = YearsOfService * 1000;

            Income += baseRaise + bonus;

            switch (rating)
            {
                case Rating.poor:
                    Income -= YearsOfService * 2000;
                    break;
                case Rating.good:
                    break;
                case Rating.excellent:
                    Income += YearsOfService * 500;
                    break;
            }

            Console.WriteLine($"New Income: {Income}");
        }
    }
}
