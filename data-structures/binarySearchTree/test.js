const BinarySearchTree = require('./binarySearchTree');
const Node = require('./node');

test('BinarySearchTree is a class', () => {
  expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('insert', () => {

  test('new node at tree not throw error', () => {
    const tree = new BinarySearchTree();
    expect(() => tree.insert(100)).not.toThrow();
  })

  test('new node at tree', () => {
    const tree = new BinarySearchTree();
    tree.insert(100);
    expect(tree.root).toEqual({key: 100, left: null, right:null});

    tree.insert(5);
    expect(tree.root).toEqual({key: 100, left: {key: 5, left: null, right:null}, right:null});
    
    tree.insert(400);
    expect(tree.root).toEqual({key: 100, left: {key: 5, left: null, right:null}, right:{key: 400, left: null, right:null}});
  })

})

test('Traverse tree in order', () => {
  const tree = new BinarySearchTree();
  const arr = [];
  const getKeys = item => arr.push(item);

  tree.insert(20)
  tree.insert(4)
  tree.insert(-20)
  tree.insert(21)
  tree.insert(3)
  tree.insert(1000)
  tree.insert(1)
  tree.traverseInOrder(getKeys)

  expect(arr).toEqual([-20,1,3,4,20,21,1000])
})

test('get minimum number in tree', () => {
  const tree = new BinarySearchTree();
  tree.insert(20)
  tree.insert(4)
  tree.insert(-20)
  tree.insert(21)
  tree.insert(3)

  expect(tree.min()).toEqual(-20)
})

test('get maximum number in tree', () => {
  const tree = new BinarySearchTree();
  tree.insert(20)
  tree.insert(4)
  tree.insert(-20)
  tree.insert(21)
  tree.insert(3)

  expect(tree.max()).toEqual(21)
})
