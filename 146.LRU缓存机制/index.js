class CustomNode {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
    this.pre = null;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(count) {
    this.count = count;
    this.Anchor = new CustomNode(null);
    this.Anchor.next = this.Anchor;
    this.Anchor.pre = this.Anchor;
    this.curMap = new Map();
  }

  __deleteNode(node) {
    node.next.pre = node.pre;
    node.pre.next = node.next;
    this.curMap.delete(node.key);
  }

  __putFront(node) {
    this.__deleteNode(node);
    // const curNode = new CustomNode(key, value);
    this.__add(node);
  }

  __add(node) {
    node.pre = this.Anchor;
    node.next = this.Anchor.next;
    node.next.pre = node;
    this.Anchor.next = node;
    this.curMap.set(node.key, node);
  }

  __addNode(key, value) {
    const newNode = new CustomNode(key, value);
    if (this.curMap.has(key)) {
      this.__putFront(this.curMap.get(key));
      this.curMap.get(key).value = value;
    } else {
      if (this.curMap.size < this.count) {
        this.__add(newNode);
      } else {
        this.__deleteNode(this.Anchor.pre);
        this.__add(newNode);
      }
    }
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.curMap.has(key)) {
    this.__putFront(this.curMap.get(key));
    return this.curMap.get(key).value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.__addNode(key, value);
};

const lRUCache = new LRUCache(2);

lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));

lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}

console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4)); // 返回 4
