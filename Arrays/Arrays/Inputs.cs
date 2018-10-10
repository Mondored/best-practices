namespace Arrays
{
    class Inputs
    {
        protected int _number;
        public int Number
        {
            get { return _number; }
            set { _number = value; }
        }

        protected string _color;
        public string Color
        {
            get { return _color; }
            set { _color = value; }
        }

        public Inputs(int number, string color)
        {
            Number = number;
            Color = color;
        }
    }
}
