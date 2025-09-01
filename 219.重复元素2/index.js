/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      if (i - map.get(nums[i]) <= k) {
        return true;
      }
      map.set(nums[i], i);
    }
  }

  return false;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9],
  k = 3;

console.log(containsNearbyDuplicate(nums, k));

// 性能低
