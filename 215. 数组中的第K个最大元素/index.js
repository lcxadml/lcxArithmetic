let nums = [
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ],
  k = 20;

const findKthLargest = function (nums, k) {
  if (nums.length === 0) return null;

  if (nums.length < 2) {
    return nums[0];
  }
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

// 这个写法还是会超时，害
const findKthLargest1 = (nums, k) => {
  if (nums.length === 1) return nums[0];
  debugger;
  const maxArr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (maxArr[maxArr.length - 1] < nums[i]) {
      // 需要更新数组
      if (maxArr.length < k) {
        // 一定要插入
        let pointer = maxArr.length - 1; // maxArr的最后一个元素
        while (pointer - 1 >= 0 && maxArr[pointer - 1] < nums[i]) {
          pointer--;
        }
        // 需要替换的
        if (pointer === 0) {
          // 插入
          // maxArr[0] = nums[i];
          maxArr.splice(0, 0, nums[i]);
        } else {
          // 插入
          maxArr.splice(pointer, 0, nums[i]);
        }
      } else {
        //直接替换
        let pointer = maxArr.length - 1; // maxArr的最后一个元素
        while (pointer - 1 >= 0 && maxArr[pointer - 1] < nums[i]) {
          pointer--;
        }
        maxArr.splice(pointer, 0, nums[i]);
        // maxArr[pointer] = nums[i];
        maxArr.pop();
      }
    } else {
      if (maxArr.length < k) {
        //需要插入
        maxArr[maxArr.length] = nums[i];
      }
    }
  }
  return maxArr[maxArr.length - 1];
};

console.log(findKthLargest(nums, k));
