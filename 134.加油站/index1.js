/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 时间超时
var canCompleteCircuit = function (gas, cost) {
  let index = 0,
    maxOwe = 0,
    finalGas = 0;
  for (let i = 0; i < gas.length; i++) {
    finalGas = finalGas + gas[i] - cost[i];
    if (finalGas < maxOwe) {
      maxOwe = finalGas;
      index = i + 1;
    }
  }
  return finalGas >= 0 ? index : -1;
};
const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
