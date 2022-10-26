/**
 * 658. Find K Closest Elements
 * https://leetcode.com/problems/find-k-closest-elements/
 */

function findClosestElements(arr: number[], k: number, x: number): number[] {
  var results: number[] = [];
  var l = 0;
  var r = arr.length - 1;
  while (l < r) {
    var mid = Math.floor(l + (r - l) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  //l is the closest index to x, offset by k
  for (var i = 0; i < k; i++) {
    results.push(arr[l + i]);
  }
  return results;
}
