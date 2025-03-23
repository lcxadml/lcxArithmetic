/**
 * Definition for singly-linked list.
 *
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);
head.next.next.next.next = new ListNode(5, null);

var reverseList = function (head) {
  let cur = head;
  pre = null;
  while (cur) { 
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};

const res = reverseList(head);
console.log(
  res.val,
  res.next.val,
  res.next.next.val,
  res.next.next.next.val,
  res.next.next.next.next.val,
  res.next.next.next.next.next.val,
  res.next.next.next.next.next.next
);
