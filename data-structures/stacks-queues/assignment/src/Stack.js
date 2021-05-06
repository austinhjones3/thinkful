class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // your solution here
    // create new Node
    // push new node to stack and point new node next to old top
    this.top = new Node(value, this.top);
    return this;
  }

  pop() {
    // check this.top
    if (this.top) {
      // point to popped node
      const popped = this.top; // object1
      this.top = this.top.next; //object2
      return popped.value; //> object1.value
    } else {
      console.log("There is nothing in the stack");
    }
  }
}

module.exports = Stack;
