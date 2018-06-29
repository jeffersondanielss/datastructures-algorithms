const Node = require('./node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if( newNode.key < node.key ) {
      if( node.left === null ) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if( node.right === null ) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(key) {
    let newNode = new Node(key);

    if( this.root === null ) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  traverseInOrderNode(node, callback) {
    if( node !== null ) {
      this.traverseInOrderNode(node.left, callback);
      callback(node.key);
      this.traverseInOrderNode(node.right, callback);
    }
  }

  
  getMin(node) {
    if( !node ) { return null }

    if( node.left === null ) {
      return node.key; 
    }
    
    return this.getMin(node.left);
  }

  
  getMax(node) {
    if( !this.root ) { return null }
    
    if( node.right === null ) {
      return node.key;
    }
    
    return this.getMax(node.right);
  }
  
  
  printNode(value) {
    console.log(value)
  }
  
  traverseInOrder(callback) {
    this.traverseInOrderNode(this.root, callback);
  }

  min() {
    return this.getMin(this.root)
  }

  max() {
    return this.getMax(this.root)
  }
}

module.exports = BinarySearchTree