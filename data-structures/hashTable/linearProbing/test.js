const hashTable = require('./index');

const hash = new hashTable();

beforeEach(() => {
  hash.put('Jamie', 'jamie@company.com');
  hash.put('Sue', 'sue@company.com');
})

afterEach(() => {
  hash.table = [];
})

test('get itens in hashTable', () => {
  expect(hash.get('Jamie')).toEqual('jamie@company.com');
  expect(hash.get('Sue')).toEqual('sue@company.com');
});

test('delete items in hash table', () => {
  hash.remove('Jamie');
  expect(hash.get('Jamie')).toBeUndefined();
  expect(hash.get('Sue')).toEqual('sue@company.com')
});