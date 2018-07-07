const Dictionary = require('./dictionary');

const dictionary = new Dictionary();

beforeEach(() => {
  dictionary.set('Brazil', 'Hexa');
  dictionary.set('World cup', '2018');
});

afterEach(() => {
  dictionary.clear();
})

test('Dictionary is a class', () => {
  expect(() => new Dictionary()).not.toThrow();
});

test('has function exists', () => {
  expect(() => dictionary.has('test')).not.toThrow();
});

test('has check non exists element', () => {
  expect(dictionary.has('Belgium')).toBeFalsy();
});

test('has check exist element', () => {
  expect(dictionary.has('Brazil')).toBeTruthy();
});

test('set function exists', () => {
  expect(() => dictionary.set('key', 'value')).not.toThrow();
});

test('delete function exists', () => {
  expect(() => dictionary.delete('non exists')).not.toThrow();
});

test('shound remove a item in dictionary', () => {
  expect(dictionary.delete('Brazil')).toBeTruthy();
});

test('Remove a non exist item in dictionary', () => {
  expect(dictionary.delete('non exixtis')).toBeFalsy();
});

test('get function exists', () => {
  expect(() => dictionary.get('non exists')).not.toThrow();
});

test('search item', () => {
  expect(dictionary.get('Brazil')).toEqual('Hexa');
})

test('shound get number of items', () => {
  expect(dictionary.size()).toEqual(2);
});

test('clear shound remove all itens in dictionary', () => {
  dictionary.clear()

  expect(dictionary.size()).toEqual(0);
});

test('keys shound get all keys in dictionary', () => {
  expect(dictionary.keys()).toEqual(['Brazil', 'World cup']);
});

test('get all items', () => {
  expect(dictionary.getItems()).toEqual({'Brazil': 'Hexa', 'World cup': '2018'});
});

test('get all values in dictionary', () => {
  expect(dictionary.values()).toEqual(['Hexa', '2018']);
});