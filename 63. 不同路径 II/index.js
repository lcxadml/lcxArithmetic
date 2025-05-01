/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 末尾或者开头是石头
  if (
    obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] ||
    obstacleGrid[0][0]
  ) {
    return 0;
  }

  let hasBlock = false;
  if (obstacleGrid.length === 1) {
    hasBlock = !!~obstacleGrid[0].indexOf(1);
    return hasBlock ? 0 : 1;
  }

  if (obstacleGrid[0].length === 1) {
    hasBlock = !!obstacleGrid.filter((item) => item[0] === 1).length;
    return hasBlock ? 0 : 1;
  }

  const x = obstacleGrid[0].length;
  const y = obstacleGrid.length;
  const dp = obstacleGrid.map(() => new Array(x).fill(0));

  dp[0][0] = 1;

  for (let i = 1; i < y; i++) {
    if (obstacleGrid[i][0]) {
      dp[i][0] = 0;
    } else {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (let j = 1; j < x; j++) {
    if (obstacleGrid[0][j]) {
      dp[0][j] = 0;
    } else {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (obstacleGrid[i - 1][j] && obstacleGrid[i][j - 1]) {
        dp[i][j] = 0;
      } else if (obstacleGrid[i - 1][j]) {
        dp[i][j] = dp[i][j - 1];
      } else if (obstacleGrid[i][j - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
