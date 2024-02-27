// 解题思路
// 使用数组模拟栈
// 匹配到[{( 做入栈处理
// 匹配到]})做出栈处理
var isValid = function (s) {
  const map = new Map();
  map.set("[", "]");
  map.set("{", "}");
  map.set("(", ")");
  let res = true;
  const stackArr = [];
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      stackArr.push(s[i]);
    } else {
      if (map.get(stackArr.pop()) !== s[i]) {
        res = false;
        break;
      }
    }
  }

  if (stackArr.length > 0) {
    return false;
  }
  return res;
};
