const arr = [22, 1, 7, 33, 12];

function bubbleSort(array) {
  let length = array.length;
  let swap;
  // ↓ Complexité temporelle de O(n²) mais si le tableau est déjà trié, complexité temporelle de O(n)
  do {
    swap = false;
    for (let i = 1; i < length; i++) {
      if (arr[i] < arr[i - 1]) {
        const tmp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = tmp;
        swap = true;
      }
    }
    length--;
  } while (swap);
}

bubbleSort(arr);
console.log(arr);
