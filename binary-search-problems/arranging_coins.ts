/** Question 441 Arranging coins
 * https://leetcode.com/problems/arranging-coins/
 */

function arrangeCoins(n: number): number {
  let l = 1;
  let r = n;
  let res = 0;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    console.log(mid);
    let coins = (mid / 2) * (mid + 1);

    if (coins > n) {
      r = mid - 1;
    } else {
      l = mid + 1;
      res = Math.max(mid, res);
    }
  }

  return res;
}
