const swap = require('../swap');

/**
 * Order a list of numbers
 * big O notation: O(n2)
 * 
 * @param {Array} n - unordered list
 * @returns {Array}
 * @example
 * selectionSort([4,2,5,5,23,5676,3])
 */

const selectionSort = n => {
  const listWidth = n.length;

  for( let index = 0; index < listWidth - 1; index++ ) {
    var min = index;

    for( let position = index; position < listWidth; position++ ) {
      if( n[min] > n[position] ) {
        min = position
      }
    }

    if( index !== min ) {
      swap(n, index, min);
    }
  }

  return n;
}

module.exports = selectionSort