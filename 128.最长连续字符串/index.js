/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (let i of set) {
    // 判断是否是起点
    // 不是起点,跳出
    if (set.has(i - 1)) {
      continue;
    }
    let y = i + 1;
    while (set.has(y)) {
      y++;
    }
    max = Math.max(max, y - i);
    if(max * 2 > set.size()) {
      break;
    }
  }
  return max;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
