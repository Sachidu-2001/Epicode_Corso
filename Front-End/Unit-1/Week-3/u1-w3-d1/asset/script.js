/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log('--- Esercizio 1 ---');

function toConcat(str1, str2) {
  let twoletters = str1.slice(0,2);
  let threeLetters = str2.slice(-3,);
  let merge = twoletters.concat(threeLetters);
  return merge.toUpperCase()
}

console.log(toConcat('Ciao belli', 'Sono virgola'));




/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/


console.log('--- Esercizio 2 ---');

function elements() {

  myArray = [];

  for(let i = 0 ; i < 10; i ++) {
    myArray.push(Math.floor(Math.random()*101));

  }
  return myArray
}

console.log(elements());



/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log('--- Esercizio 3 ---');

const evenNumbers = myArray.filter(elemento => elemento % 2 === 0);

console.log(myArray);




/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log('--- Esercizio 4 ---');

function sumArray(array) {
  let sum = 0
  array.forEach((element) => {
    sum += element;
  })
  return sum
}

console.log(sumArray(myArray));



/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log('--- Esercizio 5 ---');

const summingArray = myArray.reduce((sum,element) => sum + element, 0);

console.log(summingArray);


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log('--- Esercizio 6 ---');

const arrayX2 = (array,n) => {
  return array.map((element) => element + n)
}

console.log(arrayX2(myArray,10));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log('--- Esercizio 7---');

function arrayslength(strArr) {
  return strArr.map((element) => element.length)
}

console.log(arrayslength(['Sachidu','è','bello','affascinante']));
 

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log('--- Esercizio 8 ---');

function oddsValue() {
  let arr = [];

  for(let i = 0; i < 100; i++) {
    if(i % 2 !== 0) {
      arr.push(i);
    }
 }

 return arr;
}

console.log(oddsValue());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
  const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
       Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  
  /* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */
  console.log('---Esercizio 9---');
 
  function oldestMovie() {
    let oldYear = 2050;
    let oldMovie;
    movies.forEach((element) => {
      let movieYear = parseInt(element.Year);
      if(movieYear < oldYear) {
        oldYear = movieYear;
        oldMovie = {...element}
      }
    });
    return oldMovie;
  }

  console.log(oldestMovie());
  
  /* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */

    console.log('---Esercizio 10---')

    function movieCount(array) {
      return array.length;
    }

    console.log(movieCount(movies));
  
  /* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */

    console.log('---Esercizio 11---')

    function moviesTitle(array) {
      return array.map((element) => element.Title)
    }

    console.log(moviesTitle(movies));

  /* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */

    console.log('---Esercizio 12---')

    function onlyMillennium(array) {
     return array.filter((element) =>element.Year > 2001)
      
    }

    console.log(onlyMillennium(movies));


  /* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

    console.log('---Esercizio 13---')

    function sumYears(array) {
      return array.reduce((sum,element) => sum + parseInt(element.Year),0)
    }
    
    console.log(sumYears(movies));
  
  /* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */

    console.log('---Esercizio 14---')

    function finder(array, id) {
      return array.find(element => (element.imdbID === id))
    }

    console.log(finder(movies,'tt0100054'));

  /* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */

    console.log('---Esercizio 15---')

    function filmIndex(array, year) {
      return array.findIndex(element => (parseInt(element.Year) === year))
    } 

    console.log(filmIndex(movies,2001));