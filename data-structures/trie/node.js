class Node {
  constructor() {
    this.keys = new Map()
    this.end = false;
  }

  setEnd() {
    this.end = true
  }

  isEnd() {
    return this.end
  }
}

module.exports = Node