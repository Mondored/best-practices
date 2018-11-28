using System;
using System.Collections.Generic;
using System.Text;

namespace AbstractClass
{
    public abstract class Control
    {
        protected int xPos;
        protected int yPos;

        public Control(int xPos, int yPos)
        {
            this.xPos = xPos;
            this.yPos = yPos;
        }

        public virtual void Clear()
        {
            Console.WriteLine("Clearing control !");
        }

        public abstract void Draw();
    }
}
