using System;

namespace justToTry
{
    class Program
    {
        public static int CalculateHeight(TreeNode root)
        {
            int dept = 0;
            while((root.LeftChild!=null) && (root.RightChild!=null))
            {
                dept++;
                CalculateHeight(root.LeftChild);
            }
            return dept;
        }

        static void Main(string[] args)
        {
            TreeNode leaf1 = new TreeNode(null, null);
            TreeNode leaf2 = new TreeNode(null, null);
            TreeNode node = new TreeNode(leaf1, null);
            TreeNode root = new TreeNode(node, leaf2);

            Console.WriteLine(Program.CalculateHeight(root));
        }
    }

    public class TreeNode
    {
        public TreeNode LeftChild { get; private set; }
        public TreeNode RightChild { get; private set; }

        public TreeNode(TreeNode leftChild, TreeNode rightChild)
        {
            this.LeftChild = leftChild;
            this.RightChild = rightChild;
        }
    }
}
