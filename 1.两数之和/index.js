const nums = [2, 7, 11, 15],
  target = 9;

// 1. 暴力破解
const twoSum = function (nums, target) {
  let resArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    resArr.push(i);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[resArr[0]] + nums[j] === target) {
        resArr.push(j);
        break;
      }
    }
    if (resArr.length === 2) {
      break;
    } else {
      resArr = [];
    }
  }
  return resArr;
};

// 2. 双指针
const twoSum2 = (nums, target) => {
  let i = 0,
    j = nums.length - 1;
  const nums1 = [...nums];
  nums1.sort((a, b) => a - b);
  // while (nums1[i] + nums1[j] !== target) {
  //   if (nums1[i] + nums1[j] > target) {
  //     j--;
  //   } else {
  //     i++;
  //   }
  // }

  for (; nums1[i] + nums1[j] !== target; ) {
    if (nums1[i] + nums1[j] > target) {
      j--;
    } else {
      i++;
    }

  }


  return [
    nums.findIndex((item) => item === nums1[i]),
    nums.findLastIndex((item) => item === nums1[j]),
  ];
};

const twoSun3 = (nums, target) => {
  const map = new Map();
  let resArr = [];

  nums.forEach((item, index) => map.set(item, index));

  for (let i = 0; i < nums.length; i++) {
    const num2 = target - nums[i];
    if (map.get(num2) && i !== map.get(num2)) {
      resArr = [map.get(num2), i];
      break;
    }
  }
  return resArr;
};

console.log(twoSum2(nums, target));
