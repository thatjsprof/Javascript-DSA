class Queue{
    items = [];
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
    }
}


let queue = new Queue(3);

queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
console.log(queue.enqueue(3))
console.log(queue)