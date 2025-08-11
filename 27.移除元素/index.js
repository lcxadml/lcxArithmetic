/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const arr = nums.filter(i => i !== val);
  const len = arr.length;
  
  for(let i = 0; i < len; i++) {
      nums[i] = arr[i];
  }
  return len;
};