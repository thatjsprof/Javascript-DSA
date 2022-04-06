import { LinkedList } from "./single_approach_1";
import { DoubleNode } from "./double_approach_1";

class CircularLinkedList extends LinkedList {
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
      }
    }
  }
}

const circularLinkedList = new CircularLinkedList(equalCheck);

circularLinkedList.push(1);
circularLinkedList.push(2);
circularLinkedList.push(3);
circularLinkedList.push(4);
circularLinkedList.insert(5, 0);

console.log(circularLinkedList.getHead());
