/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let initIndex = 0,
    res = -1;
  while (initIndex < gas.length) {
    let curIndex = initIndex;
    let curGas = gas[curIndex];
    let actionCount = 0;
    res = curIndex;
    while (actionCount < gas.length) {
      const nextIndex = curIndex + 1 < gas.length ? curIndex + 1 : 0;
      const nextCost = cost[curIndex];
      const nextGas = gas[nextIndex];

      if (curGas - nextCost >= 0) {

        curGas = curGas - nextCost + nextGas;
      } else {
        res = -1;
        break;
      }
      curIndex = nextIndex;
      actionCount++;
    }
    if (res !== -1) {
      break;
    }
    initIndex++;
  }
  return res;
};

const gas = [2,3,4], cost = [3,4,3]

console.log(canCompleteCircuit(gas, cost));
