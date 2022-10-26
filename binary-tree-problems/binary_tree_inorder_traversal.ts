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

// LNR
function dfs(root: TreeNode | null){
    if(root == null) return
    dfs(root.left)
    stack.push(root.val)
    dfs(root.right)
}