class Queue {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  getLowestCount() {
    return this.lowestCount;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
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
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

function hotPotato(list, num) {
  const queue = new Queue();
  const eliminatedGuys = [];

  for (let i = 0; i < list.length; i++) {
    queue.enqueue(list[i]);
  }

  while (queue.size() > 1) {
    const lowestCount = queue.getLowestCount();

    for (let i = lowestCount; i < num + lowestCount; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedGuys.push(queue.dequeue());
  }

  return {
    eliminatedGuys,
    winner: queue.dequeue(),
  };
}

const result = hotPotato([1, 2, 3, 4, 5, 6], 3);

console.log(result);
