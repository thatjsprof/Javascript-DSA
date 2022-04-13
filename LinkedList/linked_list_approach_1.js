// let head;

// {val: "current", next:null}
class Node{
    constructor(element){
        this.val = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    validateIndex(index){
        if(index<0 || index>this.size) return "Please input a valid index"
    }
    add(element){
        let node = new Node(element);
        // if the linked list is empty
        if(this.head===null){
            this.head = node;
        }else{
            // iterate to the last node
            let current = this.head;
            while(current.next){
                current=current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(element,index){
        let node = new Node(element);
        let prev, current;
        // if the index is the first
        if(this.head === null) this.head=node;
            
        else{
            let currentIndex = 0;
            let current=this.head;
            // iterate till the point you want to insert
            while(currentIndex<index){
                prev=current;
                current=current.next;
                currentIndex++;
            }
            // when we get to the index
            prev.next = node;
            node.next = current;
        }
        this.size++;
    }

// In order to remove an element from the list we consider three conditions: 

// If the index is 0 then we remove the head and make the next node head of the list
// if the index is size – 1 then we remove the last element from the list and make prev the last element
// if it’s in between 0 to size – 1 we remove the element by using prev and the current node
    
    removeFrom(index){
        this.validateIndex(index);
        let prev, current = this.head;
        let count = 0;
        // if the index is 0
        current = this.head;
        if(index === 0){
            this.head = current.next;
        }else{
            
            while(count < index){
                prev = current;
                current = current.next;
                count++;
            }
            // we remove current
            prev.next=current.next;
        }
        this.size--;
        
        // return the removed element
        return current.val;
    }
    //this.head = {val:1, next:2}
    // {val:2, next:3}
    // {val:2, next:null}
    // I dont quite get this(yet)
    removeElement(element){
        let prev, current;
        current=this.head;
        prev = null;
        // while linked list is not empty
        while(current!==null){
            if(current.val === element){
                // this means this is the first element
                if(prev===null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.val;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    isEmpty(){
        return this.size === 0;
    }

    indexOf(element){
        let count = 0;
        let current = this.head;
        while(current !== null){
            if(current.val === element){
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }
}

let ll = new LinkedList();
// console.log(ll.isEmpty())

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll);
// ll.insertAt(100, 2);
// ll.removeFrom(1)
console.log(ll.removeElement(20));
console.log(ll);


// function traverse(n){
//     while(n != null){
//         console.log(n.val);
//         n = n.next;
//     }
// }

// traverse(head);