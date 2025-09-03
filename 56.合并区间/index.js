/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  let curArr = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    // 完成合并条件
    if (curArr.length === 0) {
      curArr = intervals[i];

      continue;
    }

    if (curArr[1] < intervals[i][0]) {
      res.push([...curArr]);
      curArr = intervals[i];

      continue;
    }

    curArr[1] = Math.max(intervals[i][1], curArr[1]);
  }

  if (curArr.length) {
    res.push(curArr);
  }

  return res;
};
const intervals = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
console.log(merge(intervals));
