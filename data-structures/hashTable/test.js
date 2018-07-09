const hashTable = require('./hashTable');

const hash = new hashTable();

beforeEach(() => {
  hash.put('rh', 'rh@company.com');
  hash.put('operations', 'operations@company.com');
  hash.put('development', 'development@company.com');
})

test('get itens in hashTable', () => {
  expect(hash.get('rh')).toEqual('rh@company.com');
  expect(hash.get('operations')).toEqual('operations@company.com');
  expect(hash.get('development')).toEqual('development@company.com');
});

test('delete items in hash table', () => {
  hash.remove('development');
  expect(hash.get('development')).toBeUndefined();
});