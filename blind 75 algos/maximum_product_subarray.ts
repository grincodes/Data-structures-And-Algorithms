/**
 * Question 152
 *
 * https://leetcode.com/problems/maximum-product-subarray/
 */

function maxProduct(nums: number[]): number {
  let res = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;

  nums.forEach((n) => {
    if (n == 0) {
      curMin = 1;
      curMax = 1;
    }
    let temp = curMax * n;

    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(temp, n * curMin, n);
    res = Math.max(res, curMax);
  });

  return res;
}
