const permute = function (nums) {
  let arr = [];
  let arrs = [];
  const loop = (arr) => {
    if (arr.length === nums.length) {
      arrs.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) {
        continue;
      }
      arr.push(nums[i]);
      loop(arr);
      arr.pop();
    }
  };
  loop(arr);
  return arrs;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute1 = function (nums) {
  let resArr = [],
    arr = [];

  const flagNums = new Array(nums.length).fill(false);
  const loop = (arr, flagNums) => {
    if (arr.length === nums.length) {
      resArr.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (flagNums[i]) continue;
      arr.push(nums[i]);

      flagNums[i] = true;
      loop(arr, flagNums);
      arr.pop();
      flagNums[i] = false;
    }
  };
  loop(arr, flagNums);
  return resArr;
};

const nums = [1, 2, 3];
console.log(permute1(nums));
