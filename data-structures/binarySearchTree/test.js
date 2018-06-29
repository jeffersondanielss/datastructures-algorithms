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
