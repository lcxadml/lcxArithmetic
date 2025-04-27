/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nums = [2, 1, 1, 1, 3];

// 来个简单的冒泡
/**
 * 思路：
 * 两层for循环将数组中的元素两两比较，如果大于就互换位置
 */
const swap = (j) => {
  [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
};

var sortArray = function (nums) {
  // 先写个交换函数

  // 第一层for循环是要冒泡遍历的次数
  for (let i = 0; i < nums.length - 1; i++) {
    // 第二层for循环是每次遍历到第几个
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        debugger;
        swap(j);
      }
    }
  }
  return nums;
};

// 不错，，，冒泡排序，时间复杂度n平方太高了out

// 看看插入排序， 时间复杂度也是n方，试试看
// 思路，，从小到大遍历，每次都放到排序好的最合理的位置就行
var sortArray1 = function (nums) {
  if (nums.length < 2) return nums;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(j - 1);
      }
    }
  }
  return nums;
};

// 太简单了，，，时间复杂度的是太高了
// 简单排序是不行了，来个高级的排序

/**
 * 快速排序
 * 利用分制的方法，将一整个数组分成多个小区域排序
 * 分为三个步骤
 * 1. 选择基准，这个很重要，直接影响快速排序的效率
 * 2. 分区操作
 * 3. 递归排序
 */
const sortArray2 = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const quickSort = (arr) => {
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  return quickSort(nums);
};

// 快速排序是一个原地排序算法
// 但是上面的快速排序不是一个原地排序，因此使用了额外的数组，在元素数量过多的时候容易造成栈溢出的情况，接下来用原地排序写法

const sortArray3 = (nums) => {
  /**
   * 1. 选择基准
   * 直接找中间数的方式在极端情况下时间复杂度会比较高
   * 因此用一种比较合理的方式
   */
  if (nums.length < 2) return nums;

  const getPivot = (left, right) => {
    // 取数组第一项中间项和最后一项， 找中间值最为基准
    const center = Math.floor((left + right) / 2);

    if (nums[left] > nums[center]) {
      [nums[left], nums[center]] = [nums[center], nums[left]];
    }

    if (nums[center] > nums[right]) {
      [nums[center], nums[right]] = [nums[right], nums[center]];
    }

    if (nums[left] > nums[center]) {
      [nums[left], nums[center]] = [nums[center], nums[left]];
    }

    [nums[center], nums[right - 1]] = [nums[right - 1], nums[center]];

    return nums[right - 1];
  };

  const quickSort = (left, right) => {
    if (left >= right) return;
    const pivot = getPivot(left, right);
    let i = left,
      j = right - 1;

    while (i < j) {
      while (i < j && nums[i] < pivot) i++;
      while (i < j && nums[j] >= pivot) j--;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    [nums[i], nums[right - 1]] = [nums[right - 1], nums[i]];
    quickSort(left, i - 1);
    quickSort(i + 1, right);
  };
  quickSort(0, nums.length - 1);
  return nums;
};

console.log(sortArray3([2, 3, 1, 6, 32, 1, 32, 74, 1, -23, 6, 5]));
