using System;
using System.Collections.Generic;
using System.Text;

namespace ListDic_demo
{
    public class Worker
    {
        public Worker()
        {
            Work();
        }

        public void Work()
        {
            List<Person> people = new List<Person>();
            Dictionary<string, Person> dict = new Dictionary<string, Person>();

            Person john = new Person() { Name = "John", Age = 24};
            people.Add(john);
            // better way 
            people.Add(new Person() { Name = "Paul", Age = 21 });
            people.Add(new Person() { Name = "George", Age = 32 });
            people.Add(new Person() { Name = "Tom", Age = 34 });
            people.Add(new Person() { Name = "Pippa", Age = 26 });
            people.Add(new Person() { Name = "Merry", Age = 43 });
            people.Add(new Person() { Name = "Ringo", Age = 28 });

            foreach (Person person in people)
            {
                Console.WriteLine($"Name = {person.Name}");
            }

            dict.Add("George", new Person() { Name = "George Wasington", Age = 67 });
            dict.Add("john", new Person() { Name = "John Adams", Age = 84 });

            Person secondPresident = dict["john"];
            Console.WriteLine($"The second president was: {secondPresident.Name}");
        }
    }
}
