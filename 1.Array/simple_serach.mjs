const array = new Array(100).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 100);

let numberOfTries = 0;

console.log(`numberToGuess : ${numberToGuess}`);

function simpleSearch(arr, numberToGuess) {
  for(let i = 0; i < arr.length; i++){
    numberOfTries++;
    if(arr[i] === numberToGuess){    
      return i;
    }
  };
  return -1
}

const start = performance.now();
const result = simpleSearch(array, numberToGuess);
const end = performance.now();
console.log(`simpleSearch time : ${end - start}`);
console.log(`Le nombre à deviner est : ${array[result]}`);
console.log(`Nombre d'essais : ${numberOfTries}`);

