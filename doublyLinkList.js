function Head(next) {
  this.next = next;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

function DoublyLinkedList() {
  this.head = new Head(null);
  this.toString = () => {
    if (!this.head.next || !this.head.next.next) {
      return JSON.stringify(this);
    } else {
    }
  };
  this.push = (value) => {
    if(!this.head.next){
      
    }
  };
}

const myList = new DoublyLinkedList();
console.log(myList.toString());

