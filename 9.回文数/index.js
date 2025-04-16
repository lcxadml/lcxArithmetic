/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function (x) {
  const positive = String(x);

  let negative = "";
  if (positive.length <= 1) return true;
  for (let i = positive.length - 1; i >= 0; i--) {
    negative = String(negative) + String(positive[i]);
  }
  console.log(negative, positive);

  return positive === negative;
};

var isPalindrome = function (x) {
  if (x < 0) return false;

  const positive = String(x);
  if (positive.length <= 1) return true;

  let i = 0;
  j = positive.length - 1;
  let res = true;
  while (j - i > 0) {
    if (positive[i] !== positive[j]) {
      res = false;
      break;
    }
    i++;
    j--;
  }

  return res;
};
const x = -11;
console.log(isPalindrome(x));
