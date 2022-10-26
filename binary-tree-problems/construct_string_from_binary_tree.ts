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

function tree2str(root: TreeNode | null): string {
  return dfs(root, []);
}

function dfs(root: TreeNode | null, res: string[]): string {
  if (root == null) {
    return;
  }

  res.push(root.val.toString());

  if (root.left == null && root.right == null) {
    return res.join("").toString();
  }

  res.push("(");
  dfs(root.left, res);
  res.push(")");

  if (root.right != null) {
    res.push("(");
    dfs(root.right, res);
    res.push(")");
  }

  return res.join("").toString();
}
