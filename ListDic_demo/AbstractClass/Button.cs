using System;
using System.Collections.Generic;
using System.Text;

namespace AbstractClass
{
    public class Button : Control
    {
        private string text;

        public Button(int xPos, int yPos, string text) : base(xPos, yPos)
        {
            this.text = text;
        }

        public override void Draw()
        {
            Console.WriteLine($"Drawing {text} button");
            //or
            //Console.WriteLine("Drawing {0} button", text);
        }
    }
}
