/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let max = 1,
    map = new Map(),
    count = 1;
  map.set(s[0], 0);

  for (let i = 1; i < s.length; i++) {
    if (!map.has(s[i])) {
      count++;
      map.set(s[i], i);
    } else {
      max = Math.max(count, max);
      i = map.get(s[i]);
      map.clear();
      count = 0;
    }
    max = Math.max(count, max);
  }
  return max;
};

const s = "ab";
console.log(lengthOfLongestSubstring(s));
