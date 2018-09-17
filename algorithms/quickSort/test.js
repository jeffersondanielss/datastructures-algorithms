const quickSort = require('./index')

describe('quickSort', () => {

  test('sort array by insertion', () => {
    const arr = [6,34,6,7,33,56,5,434,35];
    quickSort(arr)
    expect(arr).toEqual([5,6,6,7,33,34,35,56,434])
  })
})