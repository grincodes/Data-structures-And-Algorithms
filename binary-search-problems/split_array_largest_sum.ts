/**
 * Question Leetcode
 * 410. Split Array Largest Sum
 * https://leetcode.com/problems/split-array-largest-sum/
 */


var splitArray = function (nums, m) {
  // Check if the passed in threshold can be the max sum of the subarrays
  function checkIsFeasable(threshold) {
    let count = 1;
    let total = 0;
    for (const num of nums) {
      total += num;
      if (total > threshold) {
        total = num;
        count += 1;
        if (count > m) {
          return false;
        }
      }
    }
    return true;
  }
  // Binary search template
  let left = Math.max(...nums),
    right = nums.reduce((all, item) => all + item);
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (checkIsFeasable(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

