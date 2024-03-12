const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  if (s.length === 2) {
    return s[0] === s[1] ? s : s[1];
  }

  let resStr = "",
    maxLen = 0;

  // 用双指针往两边递增试试
  for (let i = 1; i < s.length - 1; i++) {
    // 左指针为 i + 1 右指针为 i - 1
    // 第一种情况
    // s[i] !== s[i + 1] && s[i] !== s[i - 1]
    // 第二种情况
    // s[i] === s[i+1] && s[i] !== s[i - 1];
    // 第三种情况
    // s[i] === s[i-1] && s[i] !== s[i + 1];
    // 第四种情况
    // s[i] === s[i-1] && s[i] === s[i + 1];
    if (s[i] !== s[i + 1] && s[i] !== s[i - 1]) {
      let left = i,
        right = i;
      console.log(left > 0 && right < s.length - 1 && s[left] === s[right]);
      while (
        left - 1 >= 0 &&
        right + 1 < s.length - 1 &&
        s[left - 1] === s[right + 1]
      ) {
        left--;
        right++;
      }
      right++;
      console.log(left, right);
      if (right - left > maxLen) {
        maxLen = right - left;
        resStr = s.slice(left, right);
      }
    }
  }
  return resStr;
};
console.log(longestPalindrome("31413121352435"));
