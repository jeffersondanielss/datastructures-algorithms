const Dictionary = require('./dictionary');

const dictionary = new Dictionary();


test('Dictionary is a class', () => {
  expect(() => new Dictionary()).not.toThrow();
});

test('has function exists', () => {
  expect(() => dictionary.has('test')).not.toThrow();
});

test('set function exists', () => {
  expect(() => dictionary.set('key', 'value')).not.toThrow();
});

test('has check non exists element', () => {
  expect(dictionary.has('Belgium')).toBeFalsy();
});

test('has check exist element', () => {
  dictionary.set('Brazil', 'hexa');
  expect(dictionary.has('Brazil')).toBeTruthy();
});
