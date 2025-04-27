/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [nums[0]];

  if (nums.length === 1) return nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i];

    if (i - 3 >= 0) {
      for (let j = i - 3; j < i - 1; j++) {
        dp[i] = Math.max(dp[j] + nums[i], dp[i]);
      }
    } else {
      for (let j = 0; j < i - 1; j++) {
        dp[i] = Math.max(dp[j] + nums[i], dp[i]);
      }
    }
  }

  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};
const nums = [1,2,3,1];
console.log(rob(nums));
