// const nums = [4, 3, 1, 6, 32, 2, 32, 74, 1, -23, 6, 1];
const nums = [3, 1, 4, -2, 123, -24, 23, 1, 5];
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  const getPivot = (left, right) => {
    const center = Math.floor((left + right) / 2);

    if (nums[left] > nums[center]) {
      swap(left, center);
    }
    if (nums[center] > nums[right]) {
      swap(center, right);
    }

    if (nums[left] > nums[center]) {
      swap(left, center);
    }
    swap(center, right - 1);
    return nums[right - 1];
  };

  const quickSort = (left, right) => {
    if (left >= right) return;

    const pivot = getPivot(left, right);

    let i = left,
      j = right - 1;

    while (i < j) {
      while (nums[i] < pivot && i < j) i++;
      while (nums[j] >= pivot && i < j) j--;
      swap(i, j);
    }

    swap(i, right - 1);
    quickSort(left, i - 1);
    quickSort(i + 1, right);
  };
  quickSort(0, nums.length - 1);
  return nums;
};
console.log(sortArray(nums));
