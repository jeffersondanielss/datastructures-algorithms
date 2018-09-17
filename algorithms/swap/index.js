/**
 * Change in list between the current element and the next
 * 
 * @param {Array} list list of numbers
 * @param {number} firstIndex position of list
 * @param {number} secondIndex position of list
 * @returns {void}
 * @example
 * swap([23,434,223,2], 1, 3)
 */

const swap = (list, firstIndex, secondIndex) => {
  let aux = list[firstIndex]
  list[firstIndex] = list[secondIndex]
  list[secondIndex] = aux;
}

module.exports = swap;