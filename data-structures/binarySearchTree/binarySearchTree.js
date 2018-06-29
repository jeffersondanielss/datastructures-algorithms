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
}

module.exports = BinarySearchTree