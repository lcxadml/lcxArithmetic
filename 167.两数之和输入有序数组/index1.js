/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let res = [null, null];
  let i = 0;
  j = numbers.length - 1;
  while (i < j) {
    const result = target - numbers[i];
    if (result === numbers[j]) {
      res[0] = i + 1;
      res[1] = j + 1;
      break;
    }
    if (numbers[j] < result) {
      i++;
      continue;
    }

    j--;
  }
  return res;
};
const numbers = [2, 3, 4],
  target = 6;

console.log(twoSum(numbers, target));
