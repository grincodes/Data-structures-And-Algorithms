/**
 * Question 191
 * https://leetcode.com/problems/number-of-1-bits/
 */

function hammingWeight(n: number): number {
  let res = 0;

  while (n) {
    n &= n - 1;
    res += 1;
  }
  return res;
}
