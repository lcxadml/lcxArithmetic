var tribonacci = function (n) {
  if (n <= 1) return n;
  const dp = [0, 1, 1];
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] * 2;
  }
  return dp[n - 1];
};

console.log(tribonacci(3));
