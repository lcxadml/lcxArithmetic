/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const s = "leetcode",
  wordDict = ["leet", "code"];
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  const set = new Set(...wordDict);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substr(j + 1, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

console.log(wordBreak(s, wordDict));
