/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const arr = matrix.map((_) => {
    return new Array(matrix[0].length).fill(undefined).map((_) => false);
  });

  const res = [];

  let x = 0,
    y = 0,
    direction = "right";

  while (
    arr[y]?.[x + 1] === false ||
    arr[y + 1]?.[x] === false ||
    arr[y]?.[x] === false ||
    arr[y - 1]?.[x] === false ||
    arr[y]?.[x - 1] === false
  ) {
    if (direction === "right") {
      arr[y][x] = true;
      res.push(matrix[y][x]);

      if (x < matrix[0].length - 1 && arr[y][x + 1] === false) {
        x++;
      } else {
        direction = "down";
        y++;
      }
      continue;
    }

    if (direction === "down") {
      arr[y][x] = true;
      res.push(matrix[y][x]);

      if (y < matrix.length - 1 && arr[y + 1][x] === false) {
        y++;
      } else {
        direction = "left";
        x--;
      }
      continue;
    }

    if (direction === "left") {
      arr[y][x] = true;
      res.push(matrix[y][x]);

      if (x > 0 && arr[y][x - 1] === false) {
        x--;
      } else {
        y--;
        direction = "up";
      }
      continue;
    }

    if (direction === "up") {
      arr[y][x] = true;
      res.push(matrix[y][x]);

      if (y > 0 && arr[y - 1][x] === false) {
        y--;
      } else {
        direction = "right";
        x++;
      }
      continue;
    }
  }
  return res;
};

const matrix = [[1, 2, 3]];

console.log(spiralOrder(matrix));
