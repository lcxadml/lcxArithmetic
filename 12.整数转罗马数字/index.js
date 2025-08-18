/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  const romanArr = [
    ["", "M"],
    ["D", "C"],
    ["L", "X"],
    ["V", "I"],
  ];
  const numStr = num.toString();
  const len = numStr.length - 1;
  let curRoman = "";
  for (let i = len; i >= 0; i--) {
    const curNum = Number(numStr[i]);
    const romanIndex = romanArr.length - 1 - (len - i);
    const curRomanArr = romanArr[romanIndex];

    const preRomanArr = romanIndex <= 0 ? ["", ""] : romanArr[romanIndex - 1];

    if (curNum === 4) {
      // TODO 0Arr
      curRoman = curRomanArr[1] + curRomanArr[0] + curRoman;
      continue;
    }
    if (curNum === 9) {
      curRoman = curRomanArr[1] + preRomanArr[1] + curRoman;
      continue;
    }
    if (Number(numStr[i]) <= 3) {
      curRoman = curRomanArr[1].repeat(Number(numStr[i])) + curRoman;
      continue;
    }
    if (Number(numStr[i]) >= 5) {
      const repeatCount = Number(numStr[i]) % 5;
      curRoman = curRomanArr[0] + curRomanArr[1].repeat(repeatCount) + curRoman;
    }
  }
  return curRoman;
};
const num = 3749;
console.log(intToRoman(num));
