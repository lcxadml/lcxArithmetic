const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = function (nums) {
  // 经典动态规划问题
  // 【不知道子数组是多少，但是可以知道子数组的最大和是多少】

  if (nums.length === 1) {
    return nums[0];
  }

  let dps = [nums[0]],
    max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dps[i] = dps[i - 1] > 0 ? dps[i - 1] + nums[i] : nums[i];
    max = Math.max(dps[i], max);
  }
  return max;
};
console.log(maxSubArray(nums));
