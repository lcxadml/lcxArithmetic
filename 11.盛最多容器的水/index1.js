/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const tempCount = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(tempCount, max);
    }
  }
  return max;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));

// 超时