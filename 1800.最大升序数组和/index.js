/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [10, 20, 30, 5, 10, 50];
var maxAscendingSum = function (nums) {
  if (nums.length === 1) return nums[0];

  let curSums = (maxSums = nums[0]);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curSums += nums[i];
    } else {
      maxSums = Math.max(curSums, maxSums);
      curSums = nums[i];
    }
  }
  maxSums = Math.max(curSums, maxSums);
  return maxSums;
};
console.log(maxAscendingSum(nums));
