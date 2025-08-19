/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.trim().split(/\s+/);

  return arr.reverse().join(" ");
};

console.log(reverseWords((s = "a good   example")));
