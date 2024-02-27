const num1 = "123456",
  num2 = "789";
const addStrings = function (num1, num2) {
  [num1, num2] = num1.length > num2.length ? [num1, num2] : [num2, num1];
  let resStr = "",
    tempNum = 0;

  // 反转字符串
  const reverseStr = (num) => {
    let resStr = "";
    for (let i = 0; i < num.length; i++) {
      resStr = num[i] + resStr;
    }
    return resStr;
  };

  const curNum1 = reverseStr(num1);
  const curNum2 = reverseStr(num2);

  for (let i = 0; i < curNum1.length; i++) {
    if (i > curNum2.length - 1) {
      resStr = ((Number(curNum1[i]) + tempNum) % 10) + resStr;
      tempNum = Math.floor((Number(curNum1[i]) + tempNum) / 10);
    } else {
      resStr =
        ((Number(curNum2[i]) + Number(curNum1[i]) + tempNum) % 10) + resStr;
      tempNum = Math.floor(
        (Number(curNum2[i]) + Number(curNum1[i]) + tempNum) / 10
      );
    }
  }
  if (tempNum) {
    resStr = tempNum + resStr;
  }
  return resStr;
};

console.log(addStrings(num1, num2));
