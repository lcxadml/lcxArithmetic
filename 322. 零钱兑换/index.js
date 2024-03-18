const coins = [1, 2, 5],
  amount = 11;

var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let c of coins) {
      if (i - c >= 0) {
        min = Math.min(min, dp[i - c] + 1);
        // console.log(i - c, min);
      }
    }
    dp[i] = min;
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
};
