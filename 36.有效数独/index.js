/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const hasSameNum = (arr) => {
    let hasSame = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        hasSame = true;
        break;
      }
    }
    return hasSame;
  };

  const resArr = board.map((arr) => arr.filter((item) => item !== "."));

  for (let i = 0; i < 9; i++) {
    const tempArr = [];
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        tempArr.push(board[j][i]);
      }
    }
    resArr.push(tempArr);
  }
  let x = 0;
  y = 0;
  while (y < 3) {
    const tempArr = [];
    for (let i = x * 3; i < (x + 1) * 3; i++) {
      for (let j = y * 3; j < (y + 1) * 3; j++) {
        board[i][j] !== "." && tempArr.push(board[i][j]);
      }
    }

    resArr.push(tempArr);
    if (x < 2) {
      x++;
    } else {
      x = 0;
      y++;
    }
  }
  return !resArr.some((item) => hasSameNum(item));
};

const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
