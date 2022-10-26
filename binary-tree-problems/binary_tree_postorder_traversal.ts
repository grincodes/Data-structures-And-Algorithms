/**
 * Question 145
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

/**
 * Question 94
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Inorder is DFS
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

    let stack:number[]
function inorderTraversal(root: TreeNode | null): number[] {
    stack =[]
    dfs(root)
    return stack
};

// LRN
function dfs(root: TreeNode | null){
    if(root == null) return
    dfs(root.right)
    stack.push(root.val);
    dfs(root.left)
  
 
}