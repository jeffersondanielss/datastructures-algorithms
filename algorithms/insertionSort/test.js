const insertionSort = require('./index')

describe('insertionSort', () => {

  test('sort array by insertion', () => {
    const arr = [6,34,6,7,33,56,5,434,35];

    expect(insertionSort(arr)).toEqual([5,6,6,7,33,34,35,56,434])
  })
})