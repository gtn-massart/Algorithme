const arr = [22, 1, 7, 33, 12];

function selectionSort(array){

  // ↓ Complexité temporelle de O(n²)
  for(let i = 0; i < array.length -1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex){
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
}

selectionSort(arr);
console.log(arr);
