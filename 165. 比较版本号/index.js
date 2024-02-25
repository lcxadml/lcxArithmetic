const version2 = "1.01.1",
  version1 = "1.001";

const compareVersion = function (version1, version2) {
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
};

console.log(compareVersion(version1, version2));
