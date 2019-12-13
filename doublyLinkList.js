function Head(next) {
  this.next = next;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

function DoublyLinkList() {
  this.head = new Head(null);
  this.toString = () => {
    let currentNode = this.head.next;
    if (!this.head.next) {
      return `[next] => null`;
    } else {
      checkType = (node, str) => (node === null ? "null" : str);
      let prev = checkType(currentNode.prev, "prev");
      let next = checkType(currentNode.next, "next");
      let displayableList = `[next] => [${prev} | ${currentNode.value} | ${next}]`;
      while (currentNode.next) {
        currentNode = currentNode.next;
        prev = checkType(currentNode.prev, "prev");
        next = checkType(currentNode.next, "next");
        displayableList = `${displayableList} => [${prev} | ${currentNode.value} | ${next}]`;
      }
      return displayableList;
    }
  };
  this.push = value => {
    if (!this.head.next) {
      this.head.next = new Node(value, null, null);
      return;
    }
    let currentNode = this.head.next;
    let lastNode = currentNode;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value, null, lastNode);
  };
  this.pop = value => {
    if (!this.head.next) {
      throw Error("List is empty");
    }
    let currentNode = this.head;
    let lastNode = currentNode;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    const popped = currentNode.value;
    lastNode.next = null;
    return popped;
  };
}

const myList = new DoublyLinkList();
console.log(myList.toString());
myList.push(0);
console.log(myList.toString());
myList.push(1);
myList.push(2);
myList.push(3);
console.log(myList.toString());
console.log(
  myList.pop(), //3
  myList.pop(), //2
  myList.pop(), //1
  myList.pop() //0
);
console.log(myList.toString());
