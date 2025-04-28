/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  if (nums.length <= 1) return nums[0];
  nums.sort((a, b) => a - b);
  const mergeArrMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mergeArrMap.has(nums[i])) {
      mergeArrMap.set(nums[i], mergeArrMap.get(nums[i]) + nums[i]);
    } else {
      mergeArrMap.set(nums[i], nums[i]);
    }
  }
  const mapArr = Array.from(mergeArrMap);
  const mergeArr = Array.from(new Set(nums));

  if (mapArr.length === 1) {
    return mapArr[0][1];
  }
  if (mapArr.length === 2)
    return mergeArr[1] - 1 === mergeArr[0]
      ? Math.max(mapArr[0][1], mapArr[1][1])
      : mapArr[0][1] + mapArr[1][1];

  const dp = [
    mapArr[0][1],
    mergeArr[1] - 1 === mergeArr[0]
      ? Math.max(mapArr[0][1], mapArr[1][1])
      : mapArr[0][1] + mapArr[1][1],
  ];

  for (let i = 2; i < mergeArr.length; i++) {
    if (mergeArr[i] - 1 === mergeArr[i - 1]) {
      if (i === 2) {
        dp[i] = mapArr[i][1] + dp[0];

        continue;
      }

      dp[i] = Math.max(dp[i - 2], dp[i - 3]) + mapArr[i][1];
    } else {
      if (i === 2) {
        dp[i] = mapArr[i][1] + Math.max(dp[0], dp[1]);
        continue;
      }
      dp[i] = Math.max(dp[i - 1], dp[i - 2]) + mapArr[i][1];
    }
  }

  return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};

var deleteAndEarn = function (nums) {
  let maxVal = 0;
  for (const val of nums) {
    maxVal = Math.max(maxVal, val);
  }
  const sum = new Array(maxVal + 1).fill(0);
  for (const val of nums) {
    sum[val] += val;
  }
  return rob(sum);
};

const rob = (nums) => {
  const size = nums.length;
  let first = nums[0],
    second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < size; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

const nums = [1, 6, 3, 3, 8, 4, 8, 10, 1, 3];
console.log(deleteAndEarn(nums));
