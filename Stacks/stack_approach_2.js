class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length===0){
            return "Underflow";
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length===0
    }
}

function matchingBracket(bracketString){
    let stack = new Stack();
    for(let i in bracketString){
        if(bracketString[i] === "("){
          stack.push(bracketString[i]);
        }else if(bracketString[i] === ")"){
            stack.pop()
        }
    }
    return stack.isEmpty() ? true:false;
}

let match = matchingBracket("(((()))")
console.log("match: ", match)


// function reverseString(stringToReverse){
//     let stack = new Stack();
//     let bod = "";
//     for(let i in stringToReverse){
//         stack.push(stringToReverse[i]);
//     }
//     console.log(stack)
    
//     while(!stack.isEmpty()){
//         console.log("stack",stack)
//         bod+=stack.pop();  
//     }
//     // console.log("bod", bod);
//     return bod;
// }

// let frt = reverseString("abcde")
// console.log(frt)
