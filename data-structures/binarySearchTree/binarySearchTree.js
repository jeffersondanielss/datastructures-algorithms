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

  searchNode(node, key){
    if(!node) { return null };

    if( node.key === key ) {
      return node;
    }

    if( key > node.key ) {
      return this.searchNode(node.right, key);
    } else {
      return this.searchNode(node.left, key);
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if( node === null ) {
      return null;
    }

    if( key < node.key ) {
      node.left = this.removeNode(node.left, key)
      return node;

    } else if ( key > node.key ) {
      node.right = this.removeNode(node.right, key)
      return node;

    } else {
      if( node.left === null && node.right === null ) {
        node = null;
        return node;

      }

      if(node.left === null) {
        node = node.right
        return node;

      } else if ( node.right === null) {
        node = node.left
        return node;

      }

      var aux = this.min(node.right);
      node.key = aux;
      node.right = this.removeNode(node.right, aux);
      return node;
    }
  }

  search(key) {
    return this.searchNode(this.root, key)
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