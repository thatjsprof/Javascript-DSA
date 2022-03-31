class Dequeue {
  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.count++;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.lowestCount = 0;
      this.items[0] = element;
      this.count++;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    const deletedValue = this.items[this.lowestCount];
    delete this.items[this.lowestCount];

    this.lowestCount++;
    this.count--;

    return deletedValue;
  }

  removeBack() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    this.count--;
    const deletedValue = this.items[this.count];
    delete this.items[this.count];

    return deletedValue;
  }

  peekFront() {
    return this.items[this.lowestCount];
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

const dequeue = new Dequeue();

dequeue.addFront(1);
dequeue.addBack(2);
dequeue.addFront(3);
dequeue.addFront(4);
dequeue.addFront(5);
dequeue.removeFront();
dequeue.addFront(5);
dequeue.removeBack(5);

console.log(dequeue);
