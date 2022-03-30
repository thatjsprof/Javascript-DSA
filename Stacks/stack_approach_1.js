class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const valueToRemove = this.items[this.count];
    delete this.items[this.count];
    return valueToRemove;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}

// Decimal to binary conversion

// 9 / 2 => 4 rem 1

function converter(valueToConvert) {
  let value = valueToConvert;
  let stack = new Stack();
  let rem;
  let objString = "";

  // converter
  while (value > 0) {
    rem = Math.floor(value % 2);
    stack.push(rem);
    value = Math.floor(value / 2);
  }

  while (!stack.isEmpty()) {
    objString += stack.pop().toString();
  }

  return objString;
}

const convertedValue = converter(9);

console.log(convertedValue);
