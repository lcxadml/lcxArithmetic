/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  if (matrix.length === 0) return matrix[0][0];

  const dp = matrix.map((item, index) => {
    if (index === 0) {
      return [...item];
    } else {
      return matrix.map(() => Number.MAX_SAFE_INTEGER);
    }
  });
  console.log(dp);

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      dp[i][j] =
        Math.min(
          dp[i - 1]?.[j - 1] || dp[i][j],
          dp[i - 1]?.[j],
          dp[i - 1]?.[j + 1] || dp[i][j]
        ) + matrix[i][j];
    }
  }
  return Math.min(...dp[matrix.length - 1]);
};
console.log(performance.now());

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);
