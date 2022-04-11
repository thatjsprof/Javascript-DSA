// stack ds using object

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    // adds element to top of the stack
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    // removes top element from the stack and returns it
    if (this.isEmpty()) return undefined;

    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];

    return element;
  }

  peek() {
    // returns the top element from the stack
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    // returns true if the size of the stack is greater than 0 and false if otherwise
    return this.count === 0;
  }

  clear() {
    // clears the stack
    this.items = {};
    this.count = 0;
  }

  size() {
    // returns the size of the stack
    return this.count;
  }

  toString() {
    // prints the content of the stack
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.size; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

// Decimal to Binary conversion
function decimalToBinaryConverter(numberToConvert) {
  const remStack = new Stack();
  let divisible = numberToConvert;
  let rem;
  let binaryString = "";

  while (divisible > 0) {
    rem = Math.floor(divisible % 2);
    remStack.push(rem);
    divisible = Math.floor(divisible / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
  console.log(remStack);
}

// Base to decimal converter
function baseToDecimalConverter(binary, base) {
  const binStack = new Stack();
  let decimalNumber = 0;

  for (let i = 0; i < binary.length; i++) {
    binStack.push(binary[binary.length - i - 1]);
  }

  while (!binStack.isEmpty()) {
    decimalNumber =
      decimalNumber + base ** (binStack.size() - 1) * Number(binStack.pop());
  }

  console.log(binStack);
  return decimalNumber;
}
