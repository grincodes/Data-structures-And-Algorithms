/** Leet code
 * 116. Populating Next Right Pointers in Each Node
 */

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    
   
    
    if(root == null) return null
    
    let queue = []
    queue.push(root)
    
    while(queue.length){
        let size = queue.length
        let prevNode= null
        for (let i =0 ; i< size; i++){
            let node = queue.shift()
            
            if(prevNode !=null){
                prevNode.next = node
                
             }
            prevNode = node
            
            if(node.left != null){
                queue.push(node.left)
                queue.push(node.right)
            }
        }
    }
   return root 
};

// 117. Populating Next Right Pointers in Each Node II

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    let head:Node = root
    
    while(head !=null){
        let dummy:Node = new Node()
        let temp = dummy
        
        //Build the linkedlist
        while(head != null){
            if(head.left !=null){
                temp.next = head.left
                temp = temp.next
            }
            
             if(head.right !=null){
                 temp.next = head.right
                temp = temp.next
                
            }
            
            head = head.next
        }
        
        //start from a new level
        head = dummy.next
    }
    return root
};