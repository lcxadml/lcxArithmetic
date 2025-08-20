/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let res = [null, null];
  for (let i = 0; i < numbers.length; i++) {
    const result = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] > result) {
        break;
      }
      if (numbers[j] === result) {
        res[0] = i + 1;
        res[1] = j + 1;
      }
    }
  }
  return res;
};
const numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers, target));
