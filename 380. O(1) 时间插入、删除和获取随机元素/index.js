var RandomizedSet = function () {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) {
    return false;
  }
  this.set.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const arr = Array.from(this.set);
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(0);
var param_2 = obj.insert(1);
var param_4 = obj.remove(0);
var param_5 = obj.insert(2);
var param_6 = obj.remove(1);
var param_7 = obj.getRandom();
console.log(param_1, param_2, param_4, param_5, param_6, param_7);
