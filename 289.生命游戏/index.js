/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const resArr = board.map((arr) => arr.map((item) => item));

  const getCurNearState = (arr, i, j) => {
    let count = 0;
    arr?.[i - 1]?.[j] && count++;
    arr?.[i - 1]?.[j - 1] && count++;
    arr?.[i - 1]?.[j + 1] && count++;
    arr?.[i]?.[j - 1] && count++;
    arr?.[i]?.[j + 1] && count++;
    arr?.[i + 1]?.[j - 1] && count++;
    arr?.[i + 1]?.[j] && count++;
    arr?.[i + 1]?.[j + 1] && count++;
    if (count <= 1 || count > 3) return 0;
    if (count === 3) return 1;
    return;
  };

  for (let i = 0; i < resArr.length; i++) {
    for (let j = 0; j < resArr[0].length; j++) {
      const state = getCurNearState(resArr, i, j);
      if (typeof state === "number") {
        board[i][j] = state;
      } else {
        board[i][j] = resArr[i][j];
      }
    }
  }
};

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);
