class Queue{
    items = [1,2,3,4,5];
    capacity = null;
    head = 0;
    tail = 0;

    constructor(capacity){
        this.capacity = Math.max(Number(capacity)||0)||null;
        this.items = Array.from({length: this.capacity});
    }

    peek(){
        return this.items[this.head];
    }

    size(){
        return this.tail - this.head;
    }

    header(){
        return this.head;
    }

    isEmpty(){
        return this.tail === 0;
    }

    isFull(){
        return this.capacity && this.tail === this.capacity;
    }
    
    enqueue(value){
        if(this.isFull()) return "Queue is full";
        this.items[this.tail] = value;
        this.tail++;
        return this.items;
    }

    dequeue(){
        if(this.isEmpty()) return "Queue is empty";
        let val = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        if(this.isEmpty()){
            this.head=0;
            this.tail=0;
        }
        return val;
    }
}

function hotPotato(list, num) {
    const queue = new Queue();
    const eliminatedGuys = [];
  
    for (let i = 0; i < list.length; i++) {
      queue.enqueue(list[i]);
    }

    // eliminatedGuys=[4]
    // num=3
    // [1, 2, 3, 4, 5, 6]
    // [4 ,5, 6, 1, 2, 3]
    // [5, 6, 1, 2, 3]
    while (queue.size() > 1) {
        let head = queue.header();
        console.log("head", head);
      for (let i = head; i < head+num; i++) {
        queue.enqueue(queue.dequeue());
      }
        // console.log("queue", queue)
    //   console.log(queue.dequeue())
      eliminatedGuys.push(queue.dequeue());
        // console.log("eliminatedGuys", [...eliminatedGuys])
    }
  
    // console.log(queue);
  
    return {
      eliminatedGuys,
      winner: queue.dequeue(),
    };
  }
const result = hotPotato([1, 2, 3, 4, 5, 6], 3);

console.log(result);

// let queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);
// queue.enqueue(9);


// console.log(queue)
// // console.log(queue.dequeue())
// console.log(queue.enqueue(queue.dequeue()))
// console.log(queue.enqueue(queue.dequeue()))
// console.log(queue.enqueue(queue.dequeue()))

// console.log(queue)

