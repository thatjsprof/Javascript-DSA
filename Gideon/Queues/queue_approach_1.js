// queue ds using objects

class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element) {
    // adds element to the queue
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    // removes first element from the queue and returns it
    if (this.isEmpty()) return undefined;
    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return element;
  }

  peek() {
    // returns the first element in the queue
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
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

// hot potatoes - circular queues
function hotPotatoes(elementsList, num) {
  // where num is the point at which the passing of potatoes stops and elementsList is the list of contestants

  const queue = new Queue();
  const eliminatedList = [];

  // setup queue with all the contestants
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  // until one contestant is left, keep cycling contestants into the queue
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}
