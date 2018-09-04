const swap = require('../swap');

/**
 * Order a list of numbers
 * big O notation: O(n2)
 * 
 * @param {Array} n - unordered list
 * @returns {Array}
 * @example
 * bubbleSort([4,2,5,5,23,5676,3])
 */

const bubbleSort = n => {
  const listWidth = n.length;

  for( let index = 0; index < listWidth; index++ ) {
    for( let position = 0; position < listWidth - 1 - index; position++ ) {
      if( n[position] > n[position + 1] ) {
        swap(n, position, position + 1)
      }
    }
  }

  return n
}

module.exports = bubbleSort