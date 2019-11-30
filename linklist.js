function Node(value, next) {
  this.value = value;
  this.next = next;
}

function Head(next) {
  this.next = next;
}

function LinkedList() {
  this.head = new Head(null);
  this.toString = () => JSON.stringify(this);
  this.createNode = (value, next) => new Node(value, next);
  this.push = value => {
    if (!this.head) {
      this.head = this.createNode(value, null);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = this.createNode(value, null);
    }
  };
  this.pop = () => {
    if (!this.head.next) {
      throw Error("Empty");
    }
    let currentNode = this.head.next;
    if (!currentNode.next) {
      const poppedValue = currentNode.value;
      this.head.next = null;
      return poppedValue;
    }
    let lastNode;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    const poppedValue = currentNode.value;
    lastNode.next = null;
    return poppedValue;
  };
  this.read = index => {
    let count = 0;
    if (index < count) {
      throw Error("Index can't be negative");
    }
    let currentNode = this.head.next;
    if (!currentNode.next) {
      if (index !== count) {
        throw Error("Index out of range");
      } else {
        return currentNode.value;
      }
    }
    while (currentNode.next && index !== count) {
      count++;
      currentNode = currentNode.next;
    }
    if (index === count) {
      return currentNode.value;
    } else {
      throw Error("Index out of range");
    }
  };
  this.write = (index, value) => {
    let count = 0;
    if (index < count) {
      throw Error("Index can't be negative");
    }
    let currentNode = this.head.next;
    if (!currentNode.next) {
      if (index !== count) {
        throw Error("Index out of range");
      } else {
        currentNode.value = value;
        return;
      }
    }
    while (currentNode.next && index !== count) {
      count++;
      currentNode = currentNode.next;
    }
    if (index === count) {
      currentNode.value = value;
    } else {
      throw Error("Index out of range");
    }
  };
  this.insert = (index, value) => {
    let count = 0;
    if (index < count) {
      throw Error("Index can't be negative");
    }
    if (!this.head.next) {
      if (index === count) {
        const node = new Node(value, null);
        this.head.next = node;
        return;
      } else {
        throw Error("Index out of range");
      }
    }
    let currentNode = this.head.next;
    while (currentNode.next && index !== count) {
      count++;
      currentNode = currentNode.next;
    }
    if (currentNode.next) {
      currentNode.next = new Node(value, currentNode.next);
    } else {
      currentNode.next = new Node(value, null);
    }
  };
}

const myList = new LinkedList();
myList.push(0);
myList.push(1);
console.log(myList.read(0), myList.read(1));
myList.write(0, 10);
myList.write(1, 11);
console.log(myList.toString());
console.log(myList.pop());
console.log(myList.pop());
myList.insert(0, 0);
myList.insert(1, 1);
myList.insert(2, 2);
myList.insert(3, 100);
console.log(myList.toString());
