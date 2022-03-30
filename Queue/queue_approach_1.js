class Queue {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    this.count--;
    return result;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  clear() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}

const queue = new Queue();

queue.enqueue(12);
queue.enqueue(24);
queue.enqueue(36);
queue.enqueue(48);

console.log(queue);
console.log(queue.dequeue());
console.log(queue.size());
