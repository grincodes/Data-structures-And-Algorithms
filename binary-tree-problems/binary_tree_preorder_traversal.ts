/**
 * Question 144
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Preorder is BFS
 */

/**
 * Definition for a binary tree node.
 **/

  class TreeNode {
      val: number
     left: TreeNode | null
      right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
  }
 
let stack:number[];

function preorderTraversal(root: TreeNode | null): number[] {
     stack = []
    BFS(root)
    return stack

};

// NLR
function BFS(root:TreeNode | null){
    if (root == null) return
    stack.push(root.val)
    BFS(root.left)
    BFS(root.right)
    
}