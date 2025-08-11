/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = new Map();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }

    
    if (map.get(nums[i]) > 1) {
      
      nums.splice(i, 1);
    }

  }

  return nums.length;
};
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
