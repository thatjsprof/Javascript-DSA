// stack - array based ds

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // adds new element to the top of the stack
    this.items.push(element);
  }

  pop() {
    // removes top element from the stack & returns the removed element
    return this.items.pop();
  }

  peek() {
    // returns the top element from the stack
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // returns true if the stack is empty and false if the size of the stack is greater than 0
    return this.items.length === 0;
  }

  clear() {
    // empties the stack
    this.items = [];
  }

  size() {
    // returns the size of the stack
    return this.items.length;
  }
}
