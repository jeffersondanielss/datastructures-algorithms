const Queue = require('./queue');

const q = new Queue();

afterEach(() => {
  q.data = [];
})

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  expect(() => { q.add(1) }).not.toThrow();
});

test('can remove elements from a queue', () => {
  expect(() => { q.remove() }).not.toThrow();
});

test('Order of elements is maintained', () => {
  q.add(1);
  q.add(2);
  q.add(3);
  q.add(4);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(4);
  expect(q.remove()).toEqual(undefined);
});
