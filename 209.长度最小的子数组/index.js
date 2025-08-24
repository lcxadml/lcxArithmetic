/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let arr = [],
    count = 0,
    res = 99999999;
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    count += nums[i];
    if (count < target) {
      continue;
    } else {
      const len = arr.length;
      let j = i - len;
      for (; count >= target; j++) {
        count -= nums[j];
      }
      // while (count >= target) {
      //   count -= arr[0];
      //   arr.shift();
      // }

      res = Math.min(i - j, res);
    }
  }

  return res === 99999999 ? 0 : res;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(target, nums));
