/**
 * Question 977
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

function sortedSquares(nums: number[]): number[] {
  let sq = nums.map((t) => {
    return Math.pow(t, 2);
  });
  return sq.sort((a, b) => a - b);
}
