// An Array implementation using LinkList in Javascript

function LinkList(value, next) {
  this.value = value;
  this.next = next;
  this.toString = () => JSON.stringify(this);
  this.createNode = value => {
    return new LinkList(value, null);
    // return { value: value, next: null };
  };
  this.push = value => {
    const newNode = this.createNode(value);
    let currentNode = this;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  };
  this.pop = () => {
    let currentNode = this;
    let lastNode;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    const popped = lastNode.next;
    lastNode.next = null;
    return popped.value;
  };
  this.read = index => {
    let currentNode = this;
    let count = 0;
    while (currentNode.next && count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return count === index ? currentNode.value : undefined;
  };
  this.write = (index, value) => {
    let currentNode = this;
    let count = 0;
    while (currentNode.next && count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    currentNode.value = value;
  };
  this.insert = (index, value) => {
    let currentNode = this;
    let lastNode;
    let count = 0;
    while (currentNode.next && count !== index) {
      lastNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    if (lastNode && lastNode.next) {
      lastNode.next = this.createNode(value);
    } else {
      lastNode = this.createNode(value);
    }
    if (!lastNode.next) {
      lastNode.next = currentNode;
    } else {
      lastNode.next.next = currentNode;
    }
  };
}

const myList = new LinkList(1, null);
myList.push(2);
myList.push(3);
myList.push(4);
console.log(myList.pop());
console.log(myList.toString());
console.log(myList.read(0), myList.read(1), myList.read(2), myList.read(3));
myList.write(0, 5);
console.log(myList.toString());
myList.insert(1, 0);
console.log(myList.toString());
myList.insert(1, 0);
console.log(myList.toString());
