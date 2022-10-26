/**
 * Question 
 * 105. Construct Binary Tree from Preorder and Inorder Traversal

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

// Neet Code with me
// not fast
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
   if(!preorder.length || !inorder.length){
       return null
   }
    
    let root = new TreeNode(preorder[0])
    
    //look for value of root in inorder
    let mid = inorder.indexOf(preorder[0])
    console.log(mid)
    
    let lp =preorder.slice(1,mid+1)
    let lin = inorder.slice(0,mid)
    
    console.log(lp,lin)

  
   root.left = buildTree(lp, lin)
    root.right = buildTree(preorder.slice(mid+1,preorder.length),inorder.slice(mid+1,inorder.length))
    
    return root
    
};


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

// Eric the programmer fast 
let preOrder
let inOrder
let index
let hm = new Map()
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    
    index =0
    preOrder = preorder
    inOrder = inorder
    let n = preOrder.length
    for(let i = 0; i<n; i++){
        hm.set(inorder[i],i)
    }
    
    let root = dfs(0,n-1)
    return root
};

function dfs(start:number,end:number){
    if(start > end) return null
    
    //build tree
    let curVal = preOrder[index++]
    let cur = new TreeNode(curVal)
    
    let mid = hm.get(curVal)
    
    cur.left = dfs(start,mid-1)
    cur.right = dfs(mid+1,end)
    return cur
}