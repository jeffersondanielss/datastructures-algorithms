export class StackExample {
  constructor() {
    this.stack = document.querySelector('#stack tbody');
    this.input = document.getElementById('push-input');
  }

  length() {
    return this.stack.querySelectorAll('tr').length
  }

  push(record) {
    const row = document.createElement('tr');
    const el = document.createElement('td');

    el.innerHTML = record
    this.input.value = '';
    
    row.appendChild(el)
    this.stack.prepend(row)
  }

  pop() {
    let item = this.stack.querySelector('tr');
    this.stack.removeChild(item);

    return item.innerHTML;
  }

  clean() {
    let itens = this.stack.querySelectorAll('tr');

    for( let item of itens ) {
      console.log(item)
      this.stack.removeChild(item);
    }
  }

  peek() {
    let itens = Array.from(this.stack.querySelectorAll('tr td'));
    let lastItem = itens[itens.length - 1]
    
    return lastItem.innerHTML
  }

  isEmpty() {
    const itens = Array.from(this.stack.querySelectorAll('tr td'))

    return (itens.length <= 0)
  }
}