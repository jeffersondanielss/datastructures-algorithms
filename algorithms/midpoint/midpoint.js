/**
 * Search a midpoint in a linkedlist
 * 
 * @param {Linkedlist} - data structure
 * @returns {Object} - node
 */

const midpoint = list => {
  let slow = list.head;
  let fast = list.head;

  while( fast.next && fast.next.next ) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
