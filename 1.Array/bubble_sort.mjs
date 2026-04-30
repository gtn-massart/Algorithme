/*
  Le tri à bulles est un algorithme de tri par comparaison.

  Il doit son nom au fait qu'il déplace rapidement les plus grands éléments vers la fin du tableau. 
  Comme les plus grosses bulles qui remontent plus vite à la surface.

  C'est un tri EN PLACE (qui n'utilise pas de mémoire supplémentaire car on modifie directement le tableau à trier)

  C'est un tri STABLE car il ne modifie pas l'ordre des éléments égaux.

  PARTICULARITÉS :
    - Pire algorithme de tri existant. Performances réelles horrible.

  CAS D'UTILISATION :
    - Apprentissage
    - Utilisé en infographie pour corriger des tableux presque triés avec un complexité linéaire (2n)
*/

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
