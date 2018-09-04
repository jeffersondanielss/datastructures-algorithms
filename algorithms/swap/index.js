/**
 * Change in list between the current element and the next
 * 
 * @param {Array} list list of numbers
 * @param {number} index position of list
 * @returns {void}
 * @example
 * swap([23,434,223,2], 1, 3)
 */

const swap = (list, i, j) => {
  let aux = list[i]
  list[i] = list[j]
  list[j] = aux;
}

module.exports = swap;