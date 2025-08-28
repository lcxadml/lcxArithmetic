/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  let res = true;
  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1);
    } else {
      map.set(magazine[i], 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i]) && map.get(ransomNote[i]) > 0) {
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    } else {
      res = false;
      break;
    }
  }

  return res;
};
const ransomNote = "aab",
  magazine = "baa";

console.log(canConstruct(ransomNote, magazine));
