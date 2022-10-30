/**
 * Question 1898. Maximum Number of Removable Characters
 * https://leetcode.com/problems/maximum-number-of-removable-characters/
 *
 *  */

var maximumRemovals = function (s, p, removable) {
  function isSubOf(p, chs) {
    const lenP = p.length,
      len = chs.length;
    if (lenP > len) return false;

    for (let i = 0, j = 0; i < lenP; i++) {
      const chP = p[i];
      j = chs.indexOf(chP, j);
      if (j === -1) return false;
      else j++;
    }

    return true;
  }

  function getChs(count) {
    if (count === 0) return [...s];

    let result = [];

    const subarray = removable.slice(0, count);
    const set = new Set(subarray);

    for (let i = 0, len = s.length; i < len; i++) {
      if (set.has(i)) continue;

      const ch = s[i];
      result.push(ch);
    }

    return result;
  }

  let low = 0,
    high = removable.length;
  // find LATEST low such that
  // p isSubOf getChs(low)
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    const midVal = getChs(mid);

    if (isSubOf(p, midVal)) low = mid;
    else high = -1 + mid;
  }

  let result = low;
  return result;
};
