1. Scrivere un programma JavaScript per elencare le proprietà di un oggetto JavaScript.
Esempio di Input:
let student = {
       name: "David Rayy",
       studentClass : "VI",
       rollNumber : 12
};

let keys = getKeys(student)
console.log(keys)

let student = new Object({
       name: "David Rayy",
       studentClass : "VI",
       rollNumber : 12
});

Output atteso: name, studentClass, rollNumber
2. Scrivi un programma JavaScript per ottenere la lunghezza (numero di proprietà) di un oggetto JavaScript.

Esempi di oggetti
let student = {
       name: "David Rayy",
       studentClass : "VI",
       rollNumber : 1213
};

Output atteso: La lunghezza di questo oggetto è 3

let car = {
       brand: "Ford",
       model: "Fiesta",
       kilometres: 50000,
       year: 2019
       color: "black"
}

Output atteso: La lunghezza di questo oggetto è 5


3. Scrivi un programma JavaScript per visualizzare in console lo stato di lettura (ovvero visualizzare il nome del libro, il nome dell'autore e lo stato di lettura) dei seguenti libri.

Esempio di oggetti che rappresentano dei libri (da inserire in un array)
{
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
},
{
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
},
{
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
}


Se readingStatus è true allora scrivere in console "Already read ${book.title} by ${book.author}" se invece il valore della proprietà è false scrivere in console "You still need to read  ${book.title} by ${book.author}"

4. Scrivi un algoritmo Bubble Sort in JavaScript.
Nota: Bubble sort è un semplice algoritmo di ordinamento che funziona scorrendo ripetutamente l'elenco da ordinare.
Esempio di Input: [6,4,0, 3,-2,1]
Output atteso : [-2, 0, 1, 3, 4, 6]

5. Scrivi un programma in JavaScript per creare un orologio.
Nota: l'output arriverà ogni secondo.
Output della console previsto:
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"