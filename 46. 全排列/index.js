const nums = [1, 2, 3];

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
