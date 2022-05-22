const Trie = require('./trie');
const Node = require('./node');

let myTrie

describe('Trie', () => {
  beforeEach(() => {
    myTrie = new Trie()
  })

  test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Trie is a class', () => {
    expect(typeof Trie.prototype.constructor).toEqual('function');
  });

  test('should insert a value in the trie', () => {
    myTrie.add('hi')

    expect(myTrie).toHaveProperty('root')
    expect(myTrie.root.keys.size).toEqual(1)
    expect(myTrie.root.end).toBeFalsy()
    expect(myTrie.root.keys.get('h').keys.get('i').end).toBeTruthy()
  })

  test('should search a value in the trie', () => {
    myTrie.add('dog')
    myTrie.add('dogs')
    expect(myTrie.search('cat')).toBeFalsy()
    expect(myTrie.search('dog')).toBeTruthy()
    expect(myTrie.search('dogs')).toBeTruthy()
  })
})