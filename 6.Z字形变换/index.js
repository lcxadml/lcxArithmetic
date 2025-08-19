/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const arrs = new Array(numRows).fill(undefined).map((_) => []);
  arrs[0][0] = s[0];
  let count = 1,
    i = 0,
    j = 0,
    lockLow = true;

  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  while (count < s.length) {
    if (lockLow) {
      i++;
      if (i === numRows - 1) {
        lockLow = false;
      }
    } else {
      i--;
      j++;
      if (i === 0) {
        lockLow = true;
      }
    }

    arrs[i][j] = s[count];
    count++;
  }
  return arrs.flat(1).join("");
};

const s = "addsadas";
const numRows = 8;
console.log(convert(s, 100));
