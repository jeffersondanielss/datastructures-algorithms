/**
 * Order a list of numbers
 * big O notation: O(list2)
 * 
 * @param {Array} list - unordered list
 * @returns {Array}
 * @example
 * bubbleSort([4,2,5,5,23,5676,3])
 */

const bubbleSort = list => {
  const listWidth = list.length;

  for( let index = 0; index < listWidth; index++ ) {
    for( let position = 0; position < listWidth - 1 - index; position++ ) {
      if( list[position] > list[position + 1] ) {
        swap(list, position)
      }
    }
  }
  return list
}

/**
 * Change in list between the current element and the next
 * 
 * @param {Array} list list of numbers
 * @param {number} index position of list
 * @returns {void}
 * @example
 * swap([23,434,223,2], 1)
 */

const swap = (list, index) => {
  let aux = list[index]
  list[index] = list[index + 1]
  list[index + 1] = aux;
}

module.exports = bubbleSort