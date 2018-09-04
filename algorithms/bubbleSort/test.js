const bubbleSort = require('./index')

describe('bubbleSort', () => {

  test('sort array', () => {
    const arr = [6,34,6,7,33,56,5,434,35];

    expect(bubbleSort(arr)).toEqual([5,6,6,7,33,34,35,56,434])
  })
})