/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const x = grid[0].length;
  const y = grid.length;
  const dp = [];
  for (let i = 0; i < y; i++) {
    dp.push(new Array(x).fill(0));
  }

  dp[0][0] = grid[0][0];

  for (let i = 1; i < x; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < y; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
