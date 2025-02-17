/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(5, 8));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 4;

let b = 3;

function crazySum(a, b) {
  if (a !== b) {
    return a + b;
  } else {
    return (a + b) * 3;
  }
}

console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(c) {
  if (c > 19) {
    return (c - 19) * 3;
  } else {
    return c - 19;
  }
}

console.log(crazyDiff(21));
console.log(crazyDiff(18));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n <= 100 && n > 20) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(19));
console.log(boundary(21));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(word) {
  if (word.startsWith("EPICODE")) {
    return word;
  } else {
    return "EPICODE" + word;
  }
}

console.log(epify("EPICODERS"));
console.log(epify(" CIao"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(d) {
  if (d >= 0 && (d % 3 === 0 || d % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(check3and7(6));
console.log(check3and7(14));
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(parola) {
  let splitString = parola.split("");
  let reverseWords = splitString.reverse();
  let joinStrings = reverseWords.join("");
  return joinStrings;
}

console.log(reverseString("itopinonavevanosnipoti"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  let words = str.split(" ");
  let phrase = [];
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0);
    let upperCase = firstChar.toUpperCase();
    let lastLetters = words[i].slice(1);
    let mergeWord = upperCase + lastLetters;
    phrase.push(mergeWord);
  }

  return phrase.join(" ");
}

console.log(upperFirst("Sachidu è bellissimo"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(abc) {
  return abc.slice(1, abc.length - 1);
}

console.log(cutString("Mi piacciono i coccodrilli"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }

  return numbers;
};

console.log(giveMeRandom(6));

const giveMeRandoms = function (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};
console.log(giveMeRandoms(5));
