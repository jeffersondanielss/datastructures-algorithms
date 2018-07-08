const Set = require('./set');
const s = new Set();
const otherSet = new Set();

beforeEach(() => {
  s.add(1)
  s.add(2)
  s.add(3)
  s.add(4)
});

afterEach(() => {
  s.clear();
  otherSet.clear();
})

test('Set is a class', () => {
  expect(typeof Set.prototype.constructor).toEqual('function');
});

test('shound returns if item exists in set', () => {
  expect(s.has(5)).toBeFalsy();
  expect(s.has(1)).toBeTruthy();
});

describe('add', () => {

  test('shound add item in set', () => {
    s.add(5)
    expect(s.has(5)).toBeTruthy();
  });

  test('shound to throw error if item already existis', () => {
    s.add(1)
    expect(s.add(1)).toBeFalsy();
  });

});

describe('delete', () => {
  test('shound delete item in set', () => {
    expect(s.delete(4)).toBeTruthy();
  });
  
  test('shound return false if item not exist', () => {
    expect(s.delete(5)).toBeFalsy();
  });
});

describe('size', () => {
  test('shound return the length of set', () => {
    expect(s.size()).toEqual(4);
  });
})

test('values shound return a array of values of set', () => {
  expect(s.values()).toEqual([1,2,3,4]);
});

test('clear shound remove all itens in set', () => {
  s.clear()

  expect(s.size()).toEqual(0);
});


describe('union', () => {
  beforeEach(() => {
    otherSet.add(5)
    otherSet.add(6)
    otherSet.add(7)
    otherSet.add(8)
  })

  test('does not throw error', () => {
    expect(() => s.union(otherSet)).not.toThrow();
  });

  test('two sets', () => {
    const newSet = s.union(otherSet);

    expect(newSet.values()).toEqual([1,2,3,4,5,6,7,8])
  });
});

describe('intersection', () => {
  beforeEach(() => {
    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);
    otherSet.add(6);
  })

  test('Does not throw error', () => {
    expect(() => s.intersection(otherSet)).not.toThrow();
  })

  test('return just itens that there in both structures', () => {
    expect(s.intersection(otherSet).values()).toEqual([3,4])
  })
});

describe('difference', () => {
  beforeEach(() => {
    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);
    otherSet.add(6);
  })

  test('Does not throw error', () => {
    expect(() => s.difference(otherSet)).not.toThrow();
  })

  test('return just different itens in structures', () => {
    expect(s.difference(otherSet).values()).toEqual([1,2])
  })
});