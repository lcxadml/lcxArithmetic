/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] + "" : s[0];
  let arr = [],
    tempArr = [];
  // 1. 奇数回文数
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i - 1] === s[i] && s[i] === s[i + 1]) {
      let j = i - 1,
        k = i + 1;
      tempArr.push(s[i]);
      while (j >= 0 && k <= s.length - 1 && s[j] === s[k]) {
        tempArr.push(s[k]);
        tempArr.unshift(s[j]);
        j--;
        k++;
      }
      arr = tempArr.length > arr.length ? [...tempArr] : [...arr];
      tempArr = [];
      // continue;

      j = i - 1;
      k = i;
      while (j >= 0 && k <= s.length - 1 && s[j] === s[k]) {
        tempArr.push(s[k]);
        tempArr.unshift(s[j]);
        j--;
        k++;
      }
      arr = tempArr.length > arr.length ? [...tempArr] : [...arr];
      tempArr = [];
      continue;
    }
    if (s[i - 1] === s[i]) {
      let j = i - 1,
        k = i;
      while (j >= 0 && k <= s.length - 1 && s[j] === s[k]) {
        tempArr.push(s[k]);
        tempArr.unshift(s[j]);
        j--;
        k++;
      }
      arr = tempArr.length > arr.length ? [...tempArr] : [...arr];
      tempArr = [];
      continue;
    }

    let j = i - 1,
      k = i + 1;
    tempArr.push(s[i]);
    while (j >= 0 && k <= s.length - 1 && s[j] === s[k]) {
      tempArr.push(s[k]);
      tempArr.unshift(s[j]);
      j--;
      k++;
    }
    arr = tempArr.length > arr.length ? [...tempArr] : [...arr];
    tempArr = [];

    if (i === s.length - 2 && s[i] === s[i + 1]) {
      arr = arr.length <= 1 ? [s[i], s[i + 1]] : [...arr];
    }
  }
  // 2. 偶数回文数
  return arr.join("");
};

// const s = "abcabcaa";
const s = "aaaa";
console.log(longestPalindrome(s));
