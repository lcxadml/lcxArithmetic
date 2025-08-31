/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(" ");

  if (arr.length !== pattern.length) {
    return false;
  }
  const map = new Map();
  const oppositeMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== arr[i]) {
        return false;
      }
    } else {

      if (oppositeMap.has(arr[i])) {
        return false;
      }
      oppositeMap.set(arr[i], pattern[i]);
      map.set(pattern[i], arr[i]);
    }
  }
  return true;
};
const pattern = "abba",
  s = "dog dog dog dog";
console.log(wordPattern(pattern, s));
