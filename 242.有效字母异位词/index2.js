/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }

    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      map.set(t[i], -1);
    }

    if (map.get(s[i]) === 0) {
      map.delete(s[i]);
    }

    if (map.get(t[i]) === 0) {
      map.delete(t[i]);
    }
  }
  return !map.size;
};
const s = "aaaa",
  t = "aaa";
console.log(isAnagram(s, t));
