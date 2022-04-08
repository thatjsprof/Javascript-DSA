const { LinkedList, Node, equalCheck } = require("./single_approach_1");
const { DoubleNode, D } = require("./double_approach_1");

class CircularDoubleLinkedList extends LinkedList {
  constructor(equalFn) {
    super(equalFn);
    this.tail = undefined;
  }

  push(element) {
    let doubleNode = new DoubleNode(element);
    let current = this.tail;

    this.tail = doubleNode;

    if (this.count === 0) {
      this.head = doubleNode;
    } else {
      this.tail.next = this.head;
      this.tail.prev = current;
      current.next = this.tail;
      this.head.prev = doubleNode;
    }

    this.count++;
  }

  insert(element, index) {
    if (this.checkIndex(index)) {
      let doubleNode = new DoubleNode(element);
      let head = this.head;

      if (index === 0) {
        this.head = doubleNode;

        if (this.count === 0) {
          this.tail = doubleNode;
        } else {
          this.tail.next = doubleNode;
          this.head.prev = this.tail;
          this.head.next = head;
          head.prev = doubleNode;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        doubleNode.next = previous.next;
        previous.next = doubleNode;
      }

      this.count++;
      return true;
    }

    return false;
  }

  removeAt(index) {
    let current = this.head;

    if (this.checkIndex(index)) {
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined;
        } else {
          this.head = current.next;
          this.tail.next = this.head;
          this.head.prev = this.tail;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = this.head;
        this.head.prev = this.tail;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }
}

// const circularLinkedList = new CircularDoubleLinkedList(equalCheck);

// circularLinkedList.push(1);
// circularLinkedList.push(2);
// circularLinkedList.push(3);
// circularLinkedList.push(4);
// circularLinkedList.insert(5, 0);

// console.log(circularLinkedList.getHead());

class CircularSingleLinkedList extends LinkedList {
  constructor(equalFn) {
    super(equalFn);
    this.tail = undefined;
  }

  push(element) {
    const singleNode = new Node(element);
    let current = this.head;

    if (current === undefined) {
      this.head = singleNode;
      this.tail = singleNode;
    } else {
      current = this.tail;
      this.tail = singleNode;
      this.tail.next = this.head;
      current.next = this.tail;
    }

    this.count++;
    return this.tail;
  }
}

const singleCircularLinkedList = new CircularSingleLinkedList(equalCheck);

singleCircularLinkedList.push(1);
singleCircularLinkedList.push(2);
singleCircularLinkedList.push(3);
