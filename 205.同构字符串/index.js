/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const oppositeMap = new Map();
  let res = true;
  if (s.length < 2) return true;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        res = false;
        break;
      }
    } else {
      if (oppositeMap.has(t[i])) {
        res = false;
        break;
      }
      map.set(s[i], t[i]);
      oppositeMap.set(t[i], s[i]);
    }
  }
  return res;
};

const s = "abc",
  t = "def";

console.log(isIsomorphic(s, t));
