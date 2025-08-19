/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.trim().split(/\s/);

  return arr[arr.length - 1].length;
};
const s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
