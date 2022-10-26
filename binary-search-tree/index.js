"use strict";
class tNode {
    constructor(item) {
        this.key = item;
        this.left = this.right = null;
    }
}
let nroot = null;
function insert(key) {
    nroot = insertRec(nroot, key);
}
function insertRec(root, key) {
    if (root == null) {
        root = new tNode(key);
        return root;
    }
    if (key < root.key) {
        root.left = insertRec(root.left, key);
    }
    else if (key > root.key) {
        root.right = insertRec(root.right, key);
    }
    return root;
}
function minVal(root) {
    let minv = root.key;
    while (root != null) {
        minv = root.left.key;
        root = root.left;
    }
    return minv;
}
function deleteKey(key) {
    nroot = deleteKeyRec(nroot, key);
}
function deleteKeyRec(root, key) {
    if (root == null) {
        return root;
    }
    if (key < root.key) {
        root.left = deleteKeyRec(root.left, key);
    }
    else if (key > root.key) {
        root.right = deleteKeyRec(root.right, key);
    }
    else {
        if (root.left == null) {
            return root.right;
        }
        else if (root.right == null) {
            return root.left;
        }
        // If both children exist
        let succParent = root;
        let succ = root.right;
        while (succ.left != null) {
            succParent = succ;
            succ = succ.left;
        }
        if (succParent != root) {
            succParent.left = succ.right;
        }
        else {
            succParent.right = succ.left;
        }
        root.key = succ.key;
        return root;
        // root.key = minVal(root.right);
        // root.right = deleteKeyRec(root.right, root.key);
    }
    //   return root;
}
function maxVal(root) {
    let maxv = root.key;
    while (root != null) {
        maxv = root.right.key;
        root = root.right;
    }
    return maxv;
}
function inOrder(root) {
    if (root != null) {
        inOrder(root.left);
        console.log(root.key);
        inOrder(root.right);
    }
}
function search(root, key) {
    if (root == null || root.key == key) {
        return root;
    }
    if (root.key < key) {
        return search(root.right, key);
    }
    return search(root.left, key);
}
function isBalanced(root) {
    return dfs(root)[0];
}
function dfs(root) {
    let left;
    let right;
    let balanced;
    // returns tuple of boolean and subtreeheight
    if (root == null) {
        return [true, 0];
    }
    left = dfs(root.left);
    right = dfs(root.right);
    balanced = left[0] && right[0] && left[1] - right[1] >= 1;
    return [balanced, 1 + Math.max(left[1], right[1])];
}
insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
inOrder(nroot);
search(nroot, 80);
deleteKey(60);
let r = isBalanced(nroot);
console.log(r);
