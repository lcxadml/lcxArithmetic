/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    const anotherIndex = nums.indexOf(nums[i], i + 1);

    if (!!~anotherIndex) {
      if (Math.abs(anotherIndex - i) <= k) {
        return true;
      }
    }
  }
  return false;
};

const nums = [1, 2, 3, 1],
  k = 3;

console.log(containsNearbyDuplicate(nums, k));

// 超时