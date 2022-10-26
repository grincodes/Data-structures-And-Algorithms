/**
 * Question
 * https://leetcode.com/problems/validate-binary-search-tree/
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

function isValidBST(root: TreeNode | null): boolean {
    
    return valid(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
};

function valid(node:TreeNode,left:number,right:number){
    
    if (node == null ){
        return true
    }
     
         
        if (!(node.val < right && node.val > left)){
             return false;
        }
           
      
    
    return (valid(node.left,left,node.val) && valid(node.right,node.val,right))
}