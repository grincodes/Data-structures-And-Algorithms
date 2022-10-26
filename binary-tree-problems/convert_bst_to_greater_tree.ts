/**
 * Question
 * 538
 * https://leetcode.com/problems/convert-bst-to-greater-tree/
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

let curSum:number;
function convertBST(root: TreeNode | null): TreeNode | null {
    curSum = 0
    dfs(root)
    return root
    
};

function dfs(root:TreeNode | null){
    if (root == null) {
      return;
    }
    dfs(root.right)
    let temp = root.val
    root.val += curSum
    curSum += temp
    dfs(root.left)

}