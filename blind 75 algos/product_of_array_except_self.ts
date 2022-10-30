/**
 * Leetcode 238
 * https://leetcode.com/problems/product-of-array-except-self/
 */

function productExceptSelf(nums: number[]): number[] {
  let leftArr = [];
  let leftMultiplication = 1;
  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *= nums[i];
  }

  let rightArr = [];
  let rightMultiplication = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i];
  }
  return rightArr;
}
