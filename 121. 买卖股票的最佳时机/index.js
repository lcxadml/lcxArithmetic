const prices = [7, 1, 5, 3, 6, 4];
const maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let min = prices[0],
    max = 0;
  // 用一个数组来存第i天卖出能获利的最大值
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return max;
};

console.log(maxProfit(prices));
