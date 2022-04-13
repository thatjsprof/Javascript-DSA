function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    // adds new element to the end of the list
    const node = new Node(element);
    let currentNode;

    if (this.head == null) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.count++;
  }

  insert(element, index) {
    // inserts new element at specified position in the list
    if (index >= 0 && index <= this.count) {
      let node = new Node(element);

      if (index === 0) {
        const currentNode = this.head;
        node.next = currentNode;
        this.head = node;
      } else {
        let previousNode = this.getElementAt(index - 1);
        const currentNode = previousNode.next;

        node.next = currentNode;
        previousNode.next = node;
      }

      return true;
    }

    return false;
  }

  getElementAt(index) {
    // returns element at a specified position in the list and if nonexistent returns undefined
    if (index >= 0 && index < this.count) {
      let node = this.head;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  remove(element) {
    // removes element from list
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    // returns the index of an element in the list and if nonexistent returns -1
    let currentNode = this.head;

    for (let i = 0; i < this.count && currentNode != null; i++) {
      if (this.equalsFn(element, currentNode.element)) {
        return i;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  removeAt(index) {
    // removes element at a specified position
    if (index >= 0 && index < this.count) {
      let currentNode = this.head;

      if (index === 0) {
        this.head = currentNode.next;
      } else {
        let previousNode = this.getElementAt(index - 1);

        previousNode.next = currentNode.next;
      }

      this.count--;
      return currentNode.element;
    }

    return undefined;
  }

  isEmpty() {
    // returns true if list is empty
    return this.size() === 0;
  }

  getHead() {
    // returns head
    return this.head;
  }

  size() {
    // returns size of the list
    return this.count;
  }

  toString() {
    // returns string value of the list
    if (this.head == null) {
      return "";
    }

    let objString = `${this.head.element}`;
    let currentNode = this.head;

    for (i = 0; i < this.count && currentNode != null; i++) {
      objString += `,${currentNode.element}`;
      currentNode = currentNode.next;
    }

    return objString;
  }
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      let node = new DoublyNode(element);
      let currentNode = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          node.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        currentNode = this.tail;
        currentNode.next = node;
        node.prev = currentNode;
        this.tail = node;
      } else {
        let previousNode = this.getElementAt(index - 1);
        currentNode = previousNode.next;
        node.next = currentNode;
        previousNode.next = node;
        currentNode.prev = node;
        node.prev = previousNode;
      }
      this.count++;
      return true;
    }

    return true;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let currentNode = this.head;
      if (index === 0) {
        this.head = current.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        currentNode = this.tail;
        this.tail = currentNode.prev;
        this.tail.next = undefined;
      } else {
        currentNode = this.getElementAt(index);
        let previousNode = currentNode.prev;
        previousNode.next = currentNode.next;
        currentNode.next.prev = previousNode;
      }
      this.count--;
      return currentNode.element;
    }
    return undefined;
  }
}

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      let node = new Node(element);

      let currentNode = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = currentNode;
          currentNode = this.getElementAt(this.size());

          this.head = node;
          currentNode.next = this.head;
        }
      } else {
        let previousNode = this.getElementAt(index - 1);
        node.next = previousNode.next;
        previousNode.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      // [ H{el, pointer} - {el, pointer} - {el, pointer} ]
      // []
      let currentNode = this.head;
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined;
        } else {
          let removed = this.head;
          currentNode = this.getElementAt(this.size());
          this.head = removed.next;
          currentNode.next = this.head;
          currentNode = removed;
        }
      } else {
        let previousNode = this.getElementAt(index - 1);
        currentNode = previousNode.next;
        previousNode.next = currentNode.next;
      }

      return currentNode.element;
    }

    return undefined;
  }
}
