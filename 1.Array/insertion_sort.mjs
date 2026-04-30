/*
  Le tri par insertion est un algorithme de tri par comparaison.

  C'est un tri EN PLACE (qui n'utilise pas de mémoire supplémentaire car on modifie directement le tableau à trier)

  C'est un tri STABLE car il ne modifie pas l'ordre des éléments égaux.

  PARTICULARITÉS :
    - Algorithme en ligne : peut recevoir la liste à trier élément par élément sans perdre en éfficatité.

  CAS D'UTILISATION :
    - Algorithme très éfficace sur des entrées de petite taille.
    - Éfficace sur des tableaux presque triés (O(n)). 
*/

const arr = [22, 1, 7, 33, 12];

function insertionSort(array) {
  // ↓ Complexité temporelle de O(n²) mais si le tableau est déjà trié, complexité temporelle de O(n)
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
}

insertionSort(arr);
console.log(arr);
