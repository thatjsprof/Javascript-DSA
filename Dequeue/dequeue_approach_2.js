class Deque {
  items = [];
  addToFront(item) {
    //push
    return this.items.push(item);
  }

  addToBack(item) {
    //unshift
    return this.items.unshift(item);
  }

  popFromFront() {
    //pop
    return this.items.pop();
  }

  popFromBack() {
    //shift
    return this.items.shift();
  }

  isEmpty() {
    return !Boolean(this.items.length);
  }

  size() {
    return this.items.length;
  }
}

function palindrome(word) {
  const deque = new Deque();
  if (!word) return "undefined";
  let trimmed = word.trim();
  for (let i in trimmed) {
    trimmed[i] && deque.addToBack(trimmed[i]);
  }
  isPalindrome = true;
  console.log("deque", deque);

  // madam
  while (deque.size() > 1 && isPalindrome) {
    let front;
    let back;
    front = deque.popFromBack();
    back = deque.popFromFront();
    if (front !== back) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

console.log(palindrome(""));

// const deque = new Deque();

// deque.addToBack(1)

// console.log(deque.isEmpty())
// deque.addToBack(2)
// deque.addToBack(3)
// deque.addToBack(4)
// deque.popFromFront()
// console.log(deque);
