/**
 * 337. House Robber III
 * https://leetcode.com/problems/house-robber-iii/
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

function rob(root: TreeNode | null): number {
    return Math.max(...dfs(root))
};

// return pair [withRoot,withoutRoot]
function dfs(root){
    if(!root){
        return [0,0]
    }
    let leftPair = dfs(root.left)
    let rightPair = dfs(root.right)
    let withRoot = root.val + leftPair[1] + rightPair[1]
    let withoutRoot = Math.max(...leftPair) + Math.max(...rightPair)
    
   
    return [withRoot, withoutRoot]
    
}