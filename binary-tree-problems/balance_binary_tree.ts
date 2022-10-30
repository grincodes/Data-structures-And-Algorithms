/**
 * Question 1382. Balance a Binary Search Tree
 * https://leetcode.com/problems/balance-a-binary-search-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  var list = [];
  InOrder(root);
  return BuildList(0, list.length - 1);

  function InOrder(root) {
    if (!root) return;

    if (root.left) InOrder(root.left);
    list.push(root);
    if (root.right) InOrder(root.right);
  }

  function BuildList(start, end) {
    let node = null;

    if (start <= end) {
      let mid = start + Math.floor((end - start) / 2); //Math.floor(start + end/2);
      node = list[mid];

      node.left = BuildList(start, mid - 1);
      node.right = BuildList(mid + 1, end);
    }

    return node;
  }
};
