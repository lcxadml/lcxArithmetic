/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= k) {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    let j = 1;
    while (j + i <= Math.min(k + i, nums.length - 1)) {
      const curNum = nums[i + j];

      if (curNum === nums[i]) {
        if (j <= k) {
          return true;
        }
      }
      j++;
    }
  }
  return false;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9],
  k = 3;

console.log(containsNearbyDuplicate(nums, k));

// 性能低
