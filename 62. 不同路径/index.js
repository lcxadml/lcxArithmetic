/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp.push(new Array(n).fill(0));
  }
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    if (i === 0) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[0][j - 1];
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (j === 0) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
