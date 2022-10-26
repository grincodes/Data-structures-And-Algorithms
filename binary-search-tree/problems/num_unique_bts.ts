/**
 * Question 
 * https://leetcode.com/problems/unique-binary-search-trees/
 */

function numTrees(n: number): number {
  let mem = new Array(n + 1).fill(0);

  mem[0] = 1;
  mem[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      mem[i] += mem[i - j] * mem[j - 1];
    }
  }

  return mem[n];
}
