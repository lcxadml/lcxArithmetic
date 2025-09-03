/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = [];
  const arrs = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.length) {
      arr.push(nums[i]);
    } else {
      if (arr[arr.length - 1] + 1 === nums[i]) {
        arr.push(nums[i]);
      } else {
        arrs.push(
          arr.length === 1 ? `${arr[0]}` : `${arr[0]}->${arr[arr.length - 1]}`
        );
        arr = [nums[i]];
      }
    }
  }
  !arr.length && arrs.push(
    arr.length === 1 ? `${arr[0]}` : `${arr[0]}->${arr[arr.length - 1]}`
  );
  return arrs;
};
const nums = [0, 1, 2, 4, 5, 7];

console.log(summaryRanges(nums));
