const { LinkedList } = require("./single_approach_1");

class SortedLinkedList extends LinkedList {
  constructor(equalFn) {
    super(equalFn);
  }

  insertElementAt(element, index = 0) {
    if (this.isEmpty()) {
      return super.insertElementAt(element, 0);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insertElementAt(element, index);
    }
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;

    for (; i < this.count && current; i++) {
      const compare = this.equalFn(element, current.element);

      if (compare) {
        return i;
      }
      current = current.next;
    }

    return i;
  }
}
