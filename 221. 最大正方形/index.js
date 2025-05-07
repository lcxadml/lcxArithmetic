/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 1, 4, 9, 16
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = Number(matrix[i][j]);
        max = Math.max(max, matrix[i][j]);
        continue;
      }

      if (matrix[i][j] === "0") {
        matrix[i][j] = 0;
        continue;
      }

      const min = Math.min(
        matrix[i - 1][j],
        matrix[i - 1][j - 1],
        matrix[i][j - 1]
      );
      const res = (Math.sqrt(min) + 1) ** 2;

      matrix[i][j] = res;

      max = Math.max(max, matrix[i][j]);
    }
  }
  return max;
};
const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
console.log(maximalSquare(matrix));
