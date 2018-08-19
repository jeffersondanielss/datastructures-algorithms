const Node = require('./node')

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root];

    while( arr.length ) {
      let node = arr.shift();
      arr.push(...node.children)
      fn(node)
    }
  }
}

module.exports = Tree