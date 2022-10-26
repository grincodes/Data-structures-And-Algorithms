/**
 *Question 104
 https://leetcode.com/problems/maximum-depth-of-binary-tree/
 1+Max(dfs(left),dfs(right))
 */

 function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right))
};


