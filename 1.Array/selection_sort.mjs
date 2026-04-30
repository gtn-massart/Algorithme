/*
  Le tri par sélection est un algorithme de tri par comparaison.

  C'est un tri EN PLACE (qui n'utilise pas de mémoire supplémentaire car on modifie directement le tableau à trier)

  C'est un tri STABLE car il ne modifie pas l'ordre des éléments égaux.

  PARTICULARITÉS :
    - Peu d'écritures (n-1 échanges dans le pire des cas)

  CAS D'UTILISATION :
    - Apprentissage.
    - Éléments coûteux à déplacer (mais tris par cycle plus optimal pour ce cas)
*/

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
