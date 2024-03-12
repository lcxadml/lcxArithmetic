const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  if (s.length === 2) {
    return s[0] === s[1] ? s : s[1];
  }

  let resStr = "",
    maxLen = 0;

  const loop = (left, right) => {
    while (
      left - 1 >= 0 &&
      right + 1 <= s.length - 1 &&
      s[left - 1] === s[right + 1]
    ) {
      left--;
      right++;
    }
    right++;
    if (right - left > maxLen) {
      maxLen = right - left;
      resStr = s.slice(left, right);
    }
  };

  // 用双指针往两边递增试试
  for (let i = 1; i < s.length - 1; i++) {
    // 左指针为 i + 1 右指针为 i - 1

    // 需要判断一下数组尾部两个字符相等的情况，遍历不到
    if (i + 1 === s.length - 1 && s[i] === s[i + 1]) {
      if (maxLen <= 2) {
        maxLen = 2;
        resStr = s.slice(i, s.length);
      }
    }
    // 第一种情况
    // s[i] !== s[i + 1] && s[i] !== s[i - 1]
    if (s[i] !== s[i + 1] && s[i] !== s[i - 1]) {
      let left = i,
        right = i;
      loop(left, right);
    }
    // // 第二种情况
    // s[i] === s[i-1] && s[i] !== s[i + 1];
    if (s[i] === s[i - 1]) {
      let left = i - 1,
        right = i;
      loop(left, right);
    }
    // 第三种情况
    // s[i] === s[i-1] && s[i] === s[i + 1];
    if (s[i] === s[i - 1] && s[i] === s[i + 1]) {
      let left = i - 1,
        right = i + 1;
      loop(left, right);
    }
  }
  return resStr;
};
console.log(longestPalindrome("1233"));
