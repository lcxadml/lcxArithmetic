const nums = [-1, 0, 1, 2, -1, -4];

// 解题思路
// 固定一个数，，，三数之和就降级为两数之和了
const threeSum = function (nums) {
  const target = 0;
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      const current = nums[i];
      while (left < right) {
        const sum = current + nums[left] + nums[right];
        if (sum === target) {
          result.push([current, nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};
