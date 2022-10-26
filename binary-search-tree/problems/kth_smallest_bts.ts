/**
 * Question 
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let res = [];
  dfs(root, res);
  console.log(res);
  return res[k - 1];
}

function dfs(root: TreeNode, res: number[]) {
  if (root != null) {
    dfs(root.left, res);
    res.push(root.val);
    dfs(root.right, res);
  }
}
