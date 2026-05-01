class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      this.head = new Node(value, current);
    }
    this.size++;
  }

  addLast(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
  }

  add(value, position) {
    if (position < 0 || position > this.size) {
      throw new Error("Wrong position");
    } else if (position === 0) {
      this.head = new Node(value, this.head);
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      current.next = new Node(value, current.next);
    }
    this.size++;
  }

  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} → `);
      current = current.next;
    }
    console.log("null");
  }
}

const linkedList = new LinkedList();

linkedList.addFirst("a");
linkedList.print();
linkedList.addFirst("b");
linkedList.print();
linkedList.addLast("c");
linkedList.print();
linkedList.add("d", 1);
linkedList.print();
linkedList.add("e", 0);
linkedList.print();
linkedList.add("f", 5);
linkedList.print();
