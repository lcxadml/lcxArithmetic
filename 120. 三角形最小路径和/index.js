/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 1) {
    return triangle[0][0];
  }

  const h = triangle.length;

  const dp = triangle.map((_, index) => {
    return new Array(index + 1).fill(0);
  });
  let min = Number.MAX_SAFE_INTEGER;

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < h; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === dp[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
      if (i === h - 1) {
        min = Math.min(dp[i][j], min);
      }
    }
  }

  return min;
};

console.log(minimumTotal([[-10]]));
