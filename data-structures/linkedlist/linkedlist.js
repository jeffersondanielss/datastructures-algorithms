const Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let current = this.head;

    while( current ) {
      count++
      current = current.next
    }

    return count;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if( !this.head ) { return null; }

    let current = this.head;

    while( current ) {
      if( !current.next ) {
        return current
      }

      current = current.next
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if( !this.head ) {
      return;
    }

    this.head = this.head.next
  }

  removeLast() {
    if( !this.head ) { return null; }

    if( !this.head.next ) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let current = this.head.next;

    while( current.next ) {
      previous = current;
      current = current.next
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if( last ) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    if( !this.head ) {
      return null;
    }

    let count = 0;
    let current = this.head;

    while( current ) {
      if( index === count ) {
        return current;
      }
      current = current.next
      count++
    }

    return null;
  }

  removeAt(index) {
    if( index === 0 ) {
      this.removeFirst();
    }

    const previous = this.getAt(index - 1);

    if( !previous || !previous.next ) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if( !this.head ) {
      this.head = new Node(data);
      return;
    }

    if( index === 0 ) {
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(callback) {
    let size = this.size()

    for( let i = 0; i < size; i++ ) {
      callback( this.getAt(i) );
    }
  }

}

module.exports = LinkedList