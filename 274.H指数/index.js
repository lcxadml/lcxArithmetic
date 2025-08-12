/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (citations.length <= 1) return citations[0] === 0 ? 0 : 1;

  citations.sort((a, b) => a - b);
  let res = 0,
      resCount = 0;
  for (let i = citations.length - 1; i >= 0; i--) {
      const count = citations.length - i,
          cur = citations[i];

      if (count >= cur) {
          res = cur;
          resCount = count - 1;
          break;
      }
  }
  return Math.max(resCount, res) === 0 ? citations[citations.length - 1] === 0 ? 0 : citations.length : Math.max(resCount, res);
};