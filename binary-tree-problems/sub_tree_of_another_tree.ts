/**
 * Question 572
 * https://leetcode.com/problems/subtree-of-another-tree/submissions/
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root == null) return false;
  if (!subRoot) return true;

  if (isSameTree(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(r, s) {
  if (!r && !s) {
    return true;
  }

  if (r && s && r.val == s.val) {
    return isSameTree(r.left, s.left) && isSameTree(r.right, s.right);
  } else {
    return false;
  }
}
