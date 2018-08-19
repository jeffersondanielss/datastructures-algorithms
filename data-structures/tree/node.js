class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push( new Node(data) );
  }

  remove(data) {
    this.children = this.children.filter(({ data }) => data !== data)
  }
}


module.exports = Node