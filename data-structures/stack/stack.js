class Stack {

  constructor() {
    this.data = [];
  }

  pop() {
    return this.data.pop();
  }

  push(record) {
    this.data.push(record);
  }

  peek() {
    return this.data[ this.data.length - 1 ];
  }

  length() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length < 1;
  }

  clear() {
    this.data = [];
  }

}

module.exports = Stack