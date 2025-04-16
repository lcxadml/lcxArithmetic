const nums =
[2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]

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

const threeSum1 = function (nums) {
  const resArr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const finNum = -nums[i];
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      if (nums[j] + nums[k] === finNum) {
        resArr.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] === nums[j - 1]) j++;
        k--;
        while (nums[k] === nums[k + 1]) k--;
      } else if (nums[j] + nums[k] < finNum) {
        j++;
        while (nums[j] === nums[j - 1]) j++;
      } else {
        k--;
        while (nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return resArr;
};
console.log(threeSum1(nums));
