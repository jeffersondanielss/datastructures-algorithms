/**
 * Detect if linkedlist is circular
 * 
 * @param {Linkedlist} - data structure
 * @returns {Boolean}
 */

const circular = list => {
  let slow = list.head;
  let fast = list.head;

  while( fast.next && fast.next.next ) {
    fast = fast.next.next;
    slow = slow.next;

    if ( fast === slow ) {
      return true;
    }
  }

  return false;
}

module.exports = circular;
