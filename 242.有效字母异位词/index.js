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
  }

  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j]) && map.get(t[j]) !== 0) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      return false;
    }
  }
  return true;
};
