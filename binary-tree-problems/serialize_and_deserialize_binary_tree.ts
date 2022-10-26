/**
 * Question 297 (Leetcode)
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
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

/*
 * Encodes a tree to a single string.
 */
let res;
function serialize(root: TreeNode | null): string {
     res =[]
    dfsSerialize(root)
    return res.join(",")
    
};
    
function dfsSerialize(node){
    if(!node) {
        res.push("N")
        return
    }
    res.push(node.val.toString())
    dfsSerialize(node.left)
    dfsSerialize(node.right)
}

let dataVals;
let i;
function dfsDeserialize(){
     let node; 
    if(dataVals[i] == "N"){
            i++
            return null
        }
    node = new TreeNode(parseInt(dataVals[i]))
    i++
    node.left = dfsDeserialize()
    node.right = dfsDeserialize()
    return node
    
    
    // for(let i =0; i<dataVals.lenght; i++){
    //     if(dataVals[i] == "N"){
    //         return null
    //     }
    //      node = new TreeNode(parseInt(dataVals[i]))
    //     node.left = dfsDeserialize()
    //     node.right = dfsDeserialize()
    // }
    // return node 
}

/*
 * Decodes your encoded data to tree.
 */

function deserialize(data: string): TreeNode | null {
    i =0
    dataVals = data.split(",")
    return dfsDeserialize()
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */