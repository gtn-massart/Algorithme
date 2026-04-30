
class MyArray {

  constructor() {
    this.value = new Array(0);
  }

  addItemAtBeginning(item) {
    // ↓ Complexité spatiale de O(n)
    const arr = new Array(this.value.length + 1);
    arr[0] = item;
    // ↓ Complexité temporelle de O(n)
    for (let i = 0; i < this.value.length; i++) {
      arr[i + 1] = this.value[i];
    }
    this.value = arr;
  }

  addItemAtEnd(item) {
    // ↓ Complexité spatiale de O(n)
    const arr = new Array(this.value.length + 1);
    let i = 0;
    // ↓ Complexité temporelle de O(n)
    while (i < this.value.length ){
      arr[i] = this.value[i];
      i++
    }
    arr[i] = item;
    this.value = arr;
  }

  addItemAtPosition(item, position) {
    if(position < 0 || position > this.value.length) {
      throw new Error("Out of range")
    } else {
      // ↓ Complexité spatiale de O(n)
      const arr = new Array(this.value.length + 1);
      // ↓ Complexité temporelle de O(n)
      for (let i = 0; i < this.value.length + 1; i++) {
        if (i === position) {
          arr[i] = item;
        } else if (i < position) {
          arr[i] = this.value[i];
        } else {
          arr[i] = this.value[i - 1]
        }
      }
      this.value = arr;
    }
  }

  removeItemAtBeginning(i){
    if (this.value.length === 0) {
      throw new Error("Empty array");
    } else {
      // ↓ Complexité spatiale de O(n)
      const arr = new Array(this.value.length - 1);
      // ↓ Complexité temporelle de O(n)
      for(let i = 1; i < this.value.length; i++) {
        arr[i - 1] = this.value[i]
      }
      this.value = arr;
    }
  }

  removeItemAtEnd() {
    if(this.value.length === 0) {
      throw new Error("Empty array");
    } else {
      // ↓ Complexité spatiale de O(n)
      const arr = new Array(this.value.length - 1);
      // ↓ Complexité temporelle de O(n)
      for(let i = 0; i < this.value.length - 1; i++) {
        arr[i] = this.value[i]
      }
      this.value = arr;
    }
  }

  removeItemAtPosition(position) {
    if(!this.value[position]) {
      throw new Error("Position unknown")
    } else {
      // ↓ Complexité spatiale de O(n)
      const arr = new Array(this.value.length - 1);
      // ↓ Complexité temporelle de O(n)
      for(let i = 0 ; i < this.value.length; i++) {
        if (i < position) {
          arr[i] = this.value[i]
        } else if (i > position){
          arr[i - 1] = this.value[i]
        }
      }
      this.value = arr;
    }
  }

}

const myarr = new MyArray();

myarr.addItemAtBeginning("a");
myarr.addItemAtBeginning("b");
console.log(myarr.value);

myarr.addItemAtEnd("c");
console.log(myarr.value);

myarr.addItemAtPosition("d", 0)
myarr.addItemAtPosition("e", 2)
console.log(myarr.value);

myarr.removeItemAtBeginning()
console.log(myarr.value);

myarr.removeItemAtEnd() 
console.log(myarr.value);

myarr.removeItemAtPosition(1)
console.log(myarr.value);
