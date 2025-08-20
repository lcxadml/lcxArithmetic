/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[index] === t[i]) {
      index++;
    }

    if (!s[index]) {
      break;
    }
  }

  return index === s.length;
};

const s = "axc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));
