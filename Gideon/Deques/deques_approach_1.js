// Deques ds using objects

class Deque {
  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  addFront(element) {
    // adds element to front of deque
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;
    }
  }

  addBack(element) {
    // adds element to back of deque
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    // removes element from the front of deque and returns it
    if (this.isEmpty()) return undefined;

    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return element;
  }

  removeBack() {
    // removes element from the back of deque and returns it
    if (this.isEmpty()) return undefined;

    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];
    return element;
  }

  peekFront() {
    // returns first element from the deque
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }

  peekBack() {
    // returns last element from the deque
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    // returns true if the queue size is greater than 0 and false if otherwise
    return this.size() === 0;
  }

  size() {
    // returns size of the queue
    return this.count - this.lowestCount;
  }

  clear() {
    // clears the queue
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

function palindromeChecker(aString) {
  // return false for falsy string values
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }

  // removes whitespace from string
  let lowerCaseString = aString.toLocaleLowerCase().split(" ").join();
  let isEqual = true;
  let firstChar, lastChar;

  let palindromeDeque = new Deque();

  for (let i = 0; i < lowerCaseString.length; i++) {
    palindromeDeque.addBack(lowerCaseString[i]);
  }

  while (palindromeDeque.size() > 1 && isEqual) {
    firstChar = palindromeDeque.removeFront();
    lastChar = palindromeDeque.removeBack();

    if (firstChar !== lastChar) isEqual = false;
  }

  return isEqual;
}
