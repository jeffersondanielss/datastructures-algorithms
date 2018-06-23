export class DOM {

  constructor(stack) {
    this.stack = stack;
    this.returns = document.getElementById('returns');
    this.input = document.getElementById('push-input');
  }

  showResult (data) {
    this.returns.innerHTML = data
    setTimeout(() => { this.returns.innerHTML = '' }, 2000)
  }

  dispatch (method) {
    const domElement = document.getElementById(method);

    domElement.addEventListener('click', () => {
      method === 'push'
        ? this.stack[method](this.input.value)
        : this.showResult(this.stack[method]())
    })
  }

}