const { Node, LinkedList, equalCheck } = require("./single_approach_1");

class DoubleNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoubleLinkedList extends LinkedList {
  constructor(equalFn) {
    super(equalFn);
    this.tail = undefined;
  }

  push(element) {
    const doubleNode = new DoubleNode(element);
    let current = this.head;

    if (this.head === undefined) {
      this.head = doubleNode;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = doubleNode;
      doubleNode.prev = current;
    }

    this.tail = doubleNode;
    this.count++;
  }

  insert(element, index) {
    const doubleNode = new DoubleNode(element);
    let current = this.head;

    if (this.checkIndex(index)) {
      if (index === 0) {
        if (this.head === undefined) {
          this.head = doubleNode;
          this.tail = doubleNode;
        } else {
          doubleNode.next = current;
          current.prev = doubleNode;
          this.head = doubleNode;
        }
      } else if (index === this.count) {
        current = this.tail;
        doubleNode.prev = current;
        current.next = doubleNode;
        this.tail = doubleNode;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = doubleNode;
        current.prev = doubleNode;
        doubleNode.prev = previous;
        doubleNode.next = current;
      }

      this.count++;
      return true;
    }

    return false;
  }

  removeAt(index) {
    if (this.checkIndex(index)) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }

      this.count--;
      return current.element;
    }

    return undefined;
  }
}

// if the index == 0 inserting at the first position
// if the index is count - 1
// else if the index in between 0 and count - 1

const doubleLinkedList = new DoubleLinkedList(equalCheck);

// doubleLinkedList.push(1);
// doubleLinkedList.push(2);
// doubleLinkedList.push(3);
// doubleLinkedList.push(4);
// doubleLinkedList.insert(5, 1);
// doubleLinkedList.removeAt(4)

// console.group(doubleLinkedList.getHead());

module.exports = { DoubleNode, DoubleLinkedList };
