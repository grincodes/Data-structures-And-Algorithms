/**
 * Question 103
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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

let treeStack;
function zigzagLevelOrder(root: TreeNode | null): number[][] {
     treeStack = []
    lvot(root)
    return treeStack;
};





function lvot(root: TreeNode | null){
    
    
    let queue = []

    if(root == null) return treeStack
    
    queue.push(root)
    let isLeftToRight = true
    
    while(queue.length){
        let level=[]
        let size = queue.length
        
        for (let i =0 ; i< size ; i++){
            let temp = queue.shift()
            if(temp){
                if(isLeftToRight){
                     level.push(temp.val)
                }
                else{
                    level.unshift(temp.val)
                }
                
                 queue.push(temp.left)
                queue.push(temp.right)
                
            }
            
               
        }
        
        if(level.length) {
            isLeftToRight = !isLeftToRight
            treeStack.push(level)
        }
    }
   
    
    
}