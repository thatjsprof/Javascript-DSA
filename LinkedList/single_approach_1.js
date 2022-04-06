export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export class LinkedList {
  constructor(equalFn) {
    this.count = 0;
    this.head = undefined;
    this.equalFn = equalFn;
  }

  push(element) {
    const node = new Node(element);
    let current = this.head;

    if (this.head === undefined) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index) {
    if (this.checkIndex(index)) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }

  getElementAt(index) {
    if (this.checkIndex(index)) {
      let current = this.head;

      for (let i = 0; i < index && current.next; i++) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  }

  insertElementAt(element, index) {
    const node = new Node(element);

    if (this.checkIndex(index)) {
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }

      this.count++;
      return true;
    }

    return false;
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current; i++) {
      if (this.equalFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  checkIndex(index) {
    return index >= 0 && index <= this.count;
  }
}

const equalCheck = (a, b) => {
  return a === b;
};

const newList = new LinkedList(equalCheck);

newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.insertElementAt(6, 3);

console.log(newList.indexOf(4));
console.log(newList.getHead());
