/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = [];
  let insetIndex = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < newInterval[0]) {
      res.push(intervals[i]);
    } else {
      if (insetIndex >= 0) {
        res.push(intervals[i]);
      } else {
        res.push(newInterval, intervals[i]);
        insetIndex = res.length - 2;
      }
    }
  }
  if (insetIndex < 0) {
    res.push(newInterval);
    insetIndex = res.length - 1;
  }

  //   =======
  const res1 = [];
  let curArr = [];
  for (let i = 0; i < res.length; i++) {
    // 完成合并条件
    if (curArr.length === 0) {
      curArr = res[i];

      continue;
    }

    if (curArr[1] < res[i][0]) {
      res1.push([...curArr]);
      curArr = res[i];

      continue;
    }

    curArr[1] = Math.max(res[i][1], curArr[1]);
  }

  if (curArr.length) {
    res1.push(curArr);
  }

  return res1;
};

const intervals = [
    [0, 5],
    [9, 12],
  ],
  newInterval = [7, 16];

console.log(insert(intervals, newInterval));
