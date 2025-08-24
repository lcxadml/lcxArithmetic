/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length - 2) {
    let j = i + 1,
      k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    while (j < k) {
      const temp = 0 - nums[i];
      if (j - 1 !== i && nums[j - 1] === nums[j]) {
        j++;
        continue;
      }
      if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
        k--;
        continue;
      }
      if (nums[j] + nums[k] < temp) {
        j++;
      } else if (nums[j] + nums[k] > temp) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      }
    }
    i++;
  }
  return res;
};

const nums = [0, 0, 0];
console.log(threeSum(nums));
