/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const curCount = map[s[i]],
      nexCount = i < s.length - 1 ? map[s[i + 1]] : 0;

    if (curCount < nexCount) {
      count += nexCount - curCount;
      i++;
    } else {
      count += curCount;
    }
  }
  return count;
};

const s = "LVIII";
console.log(romanToInt(s));
