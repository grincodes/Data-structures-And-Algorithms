/**
 * Question 121
 * Leetcode https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
function maxProfit(prices: number[]): number {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      maxProfit = Math.max(prices[r] - prices[l], maxProfit);
      r++;
    } else {
      l = r;
      r++;
    }
  }

  return maxProfit;
}
