const Set = require('./set');

test('Set is a class', () => {
  expect(typeof Set.prototype.constructor).toEqual('function');
});

test('shound returns if item exists in set', () => {
  const s = new Set();
  expect(s.has(1)).toBeFalsy();
});

describe('add', () => {

  test('shound add item in set', () => {
    const s = new Set();
    s.add(1)
    expect(s.has(1)).toBeTruthy();
  });

  test('shound to throw error if item already existis', () => {
    const s = new Set();
    s.add(1)
    expect(s.add(1)).toBeFalsy();
  });

});

describe('delete', () => {
  test('shound delete item in set', () => {
    const s = new Set();
    s.add(1)
    s.add(2)
    expect(s.delete(2)).toBeTruthy();
  });

  test('shound return false if item not exist', () => {
    const s = new Set();
    expect(s.delete(4)).toBeFalsy();
  });
});

test('size shound return the length of set', () => {
  const s = new Set();
  s.add(1)
  s.add(2)
  s.add(3)
  s.add(4)

  expect(s.size()).toEqual(4);
});

test('clear shound remove all itens in set', () => {
  const s = new Set();
  s.add(1)
  s.add(2)
  s.add(3)
  s.add(4)
  s.clear()

  expect(s.size()).toEqual(0);
});

test('values shound return a array of values of set', () => {
  const s = new Set();
  s.add(1)
  s.add(2)
  s.add(3)
  s.add(4)

  expect(s.values()).toEqual([1,2,3,4]);
});