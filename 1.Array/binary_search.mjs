const array = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);

let numberOfTries = 0;

console.log(`numberToGuess : ${numberToGuess}`);

function binarySearch(arr, numberToGuess) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2)
    const guess = arr[mid]
    numberOfTries++
    if (guess === numberToGuess) {
      return mid
    } else if (guess > numberToGuess) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1
}

const start = performance.now();
const result = binarySearch(array, numberToGuess);
const end = performance.now();
console.log(`binarySearch time : ${end - start}`);
console.log(`Le nombre à deviner est : ${array[result]}`);
console.log(`Nombre d'essais : ${numberOfTries}`);

// Logarithme base 2 → nombre de fois qu'un nombre doit être divisé par deux pour atteindre 
// une valeur de 1 
// Par exemple avec le nombre 50: 50/2 -> 25/2 → 12.5/2 → 6.25/2 → 3.125/2 → 1.56/2 → 0.78 
// => 5 > ? > 6