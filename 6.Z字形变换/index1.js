/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let count = 1,
    i = 0,
    j = 0,
    lockLow = true;
  const strs = new Array(numRows).fill(undefined).map((_) => "");

  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  strs[0] = s[0];

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
    strs[i] += s[count];

    count++;
  }
  return strs.join("");
};

const s = "addsadas";
const numRows = 8;
console.log(convert(s, 100));
