# 165. 比较版本号

给你两个版本号 version1 和 version2 ，请你比较它们。

版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。

比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。

返回规则如下：

如果 version1 > version2 返回 1，
如果 version1 < version2 返回 -1，
除此之外返回 0。

**解题思路**
1. 将版本号拆分成数组
2. 找出两个数组中较长的数组遍历
3. 只要有某项两个版本号不相等即完成比较跳出循环
4. 如果遍历长度超过较小数组，则直接看较大数组的项有大于0即完成比较
```
let versionArr1 = version1.split(".");
  let versionArr2 = version2.split(".");
  let result = 0;
  const isVersion1 = versionArr1.length > versionArr2.length;

  [versionArr1, versionArr2] =
    versionArr1.length > versionArr2.length
      ? [versionArr1, versionArr2]
      : [versionArr2, versionArr1];

  for (let i = 0; i < versionArr1.length; i++) {
    if (i > versionArr2.length - 1) {
      if (Number(versionArr1[i]) > 0) {
        result = 1;
        break;
      }
    } else {
      if (Number(versionArr1[i]) > Number(versionArr2[i])) {
        result = 1;
        break;
      } else if (Number(versionArr1[i]) < Number(versionArr2[i])) {
        result = -1;
        break;
      } else {
        result = 0;
      }
    }
  }
  if (!result) {
    return result;
  }

  return isVersion1 ? result : -result;
```
