/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0,
    i = 0,
    j = height.length - 1;

  while (i < j) {
    if (height[i] < height[j]) {
      max = Math.max(height[i] * (j - i), max);
      i++;
    } else if (height[i] === height[j]) {
      max = Math.max(height[i] * (j - i), max);
      i++;
      j--;
    } else {
      max = Math.max(height[j] * (j - i), max);
      j--;
    }
  }
  return max;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));

// 超时
