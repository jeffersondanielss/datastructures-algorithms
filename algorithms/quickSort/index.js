const swap = require('../swap')

/**
 * Order array
 * 
 * big O notation: O(n log n)
 * @param {*} n array to order
 * @returns {Array} ordered array
 * @example
 * quickSort([4,2,5,5,23,5676,3])
 */

const quickSort = n => {
  const firstPosition = 0
  const lastPosition = n.length - 1

  n = quick(n, firstPosition, lastPosition)

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

const quick = (n, left, right) => {
  let index

  if( n.length > 1) {
    index = partition(n, left, right)

    if( left < index - 1 ) {
      quick(n, left, index - 1)
    }

    if( left < right ) {
      quick(n, index, right)
    }
  }
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

const partition = (n, left, right) => {
  let pivot = n[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while( i <= j ) {
    while( n[i] < pivot ) {
      i++
    }

    while( n[j] > pivot ) {
      j--
    }

    if( i<= j ) {
      swap(n, i, j)
      i++
      j--
    }
  }

  return i
}

module.exports = quickSort