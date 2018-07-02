/**
 * Return the element n spaces from the last node in the list.
 * 
 * @param {Linkedlist} list - data structure
 * @param {number} position 
 * 
 * @returns {Node}
 */

const fromLast = (list, position) => {
  let slow = list.head;
  let fast = list.head;

  while( position > 0 ) {
    fast = fast.next;
    position--;
  }

  while( fast.next ) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow
}

module.exports = fromLast;
