const s = "aab";

// Map写法
const lengthOfLongestSubstring = function (s) {
  if (s.length < 1) {
    return s.length;
  }

  let max = 0,
    count = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      i = map.get(s[i]);
      max = Math.max(count, max);
      map.clear();
      count = 0;
      continue;
    } else {
      map.set(s[i], i);
      count++;
    }
  }
  return Math.max(count, max);
};

//暴力破解
const lengthOfLongestSubstring1 = (s) => {
  if (s.length < 1) {
    return s.length;
  }

  let max = 0,
    count = 0,
    cacheSubArr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (cacheSubArr.includes(s[j])) {
        max = Math.max(count, max);
        count = 0;
        cacheSubArr = [];
        break;
      } else {
        cacheSubArr.push(s[j]);
        count++;
      }
    }
  }
  return Math.max(count, max);
};

const lengthOfLongestSubstring2 = (s) => {
  const map = new Map();
  let max = 0,
    count = 0;

  if (s.length <= 1) return s.length;

  for (let i = 0; i < s.length; ) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
      count++;
      i++;
    } else {
      max = Math.max(max, count);
      i = map.get(s[i]) + 1;
      count = 0;
      map.clear();
    }
  }
  max = Math.max(max, count);
  return max;
};

// 暴力破解
const lengthOfLongestSubstring3 = (s) => {
  let max = 0, count = 0;
  const set = new Set();
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      if(set.has(s[j])) {
        
      }
    }
  }
}

console.log(lengthOfLongestSubstring2(s));
