function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre,
    cur = head;
  while (cur) {
    const node = cur.next;
    cur.next = pre;
    pre = cur;
    cur = node;
  }
  return cur;
};
