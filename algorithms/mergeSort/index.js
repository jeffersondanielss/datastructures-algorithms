/**
 * Order array
 * 
 * big O notation: O(n log n)
 * @param {*} n array to order
 * @returns {Array} ordered array
 * @example
 * mergeSort([4,2,5,5,23,5676,3])
 */

const mergeSort = n => {
  n = mergeSortRec(n)

  return n
}

/**
 * Order array
 * 
 * @param {*} n array to order
 * @returns {Array} ordered array
 * @example
 * mergeSortRec([4,2,5,5,23,5676,3])
 */

const mergeSortRec = n => {
  let length = n.length

  if( length === 1) {
    return n
  }

  let middle = Math.floor(length / 2)
  let leftPart = n.slice(0, middle)
  let rightPart = n.slice(middle, length)

  return merge( mergeSortRec(leftPart), mergeSortRec(rightPart) )
}

/**
 * Order array
 * 
 * @param {Array} leftPart left part of array
 * @param {Array} rightPart right part of array
 * @returns {Array}
 * @example
 * merge([4, 2, 5], [5, 23, 5676, 3])
 */

const merge = (leftPart, rightPart) => {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while( indexLeft < leftPart.length && indexRight < rightPart.length ) {

    if( leftPart[indexLeft] < rightPart[indexRight] ) {
      result.push(leftPart[indexLeft++])
    } else {
      result.push(rightPart[indexRight++])
    }

  }

  while( indexLeft < leftPart.length ) {
    result.push(leftPart[indexLeft++])
  }

  while( indexRight < rightPart.length ) {
    result.push(rightPart[indexRight++])
  }

  return result
}

module.exports = mergeSort