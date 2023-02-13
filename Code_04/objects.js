const vuoto = {};
console.log("questo è il mio oggetto vuoto", vuoto);

const band = {
  nome: "Budini One Direction Molli",
  componenti: 4,
};

const band2 = {};
band2.nome = "Beatles";

console.log(typeof band);
console.log(typeof band.componenti);

band.genere = "funk";
band.like = true;

delete band.like;

//band.albums = ['primo album', 'secondo album', 'terzo album']
//band.songs = ['prima', 'seconda']

band.albums;
band.albums = [
  {
    title: "Primo album",
    year: 1983,
    band: 1,
    songs: [
      "prima canzone del primo album",
      "seconda canzone del primo album",
      "terza canzone del primo album",
    ],
  },
  {
    title: "secondo album",
    year: 1985,
    band: 3,
    songs: [
      "prima canzone del secondo album",
      "seconda canzone del secondo album",
      "terza canzone del secondo album",
    ],
  },
];

band.albums.push({
  title: "Terzo album",
  year: 1970,
  band: 2,
  songs: [
    "prima canzone del terzo album",
    "seconda canzone del terzo album",
    "terza canzone del terzo album",
  ],
});

console.log(band.albums);

/*
 Questa funzione ordina per anno
 */
const ordinaAlbumsPerAnno = () => {
  //TODO inserire link
  let albumsToBeSorted = [...band.albums];
  //TODO inserire link mdn array.sort
  return albumsToBeSorted.sort((albumA, albumB) => {
    return albumA.year - albumB.year;
  });
};

ordinaAlbumsPerAnno();

/**
 * Funzione che ordina albums per proprietà dell'album
 * @param {string} field stringa che identifica la proprietà su cui ordinare
 */
const ordinaAlbumsPerField = (field) => {
  let albumsToBeSorted = [...band.albums];
  return albumsToBeSorted.sort((a, b) => {
    return a[field] - b[field];
  });
};
/*
let compareFn = (a, b) => {
    return a[field] - b[field];
}

const ordinaAlbumsPerField2 = (field) => {
    return band.albums.sort(compareFn)

}
*/

let albumOrdinatiPerAnno = ordinaAlbumsPerField("year");
console.log("albumOrdinatiPerAnno: ", albumOrdinatiPerAnno);

let albumOrdinatiPerBand = ordinaAlbumsPerField("band");
console.log("albumOrdinatiPerBand: ", albumOrdinatiPerBand);

/**
 * Funzione che ordina un vettore {Array} di elementi (Object)
 * @param {*} array array di elementi da ordinare
 * @param {String} field String che indentifica le proprietà del singolo elemento su cui ordinare
 * @returns
 */

const ordinaArrayByNumber = (array, field) => {
  let albumsToBeSorted = [...array];
  return albumsToBeSorted.sort((a, b) => {
    return a[field] - b[field];
  });
};

let albumOrdinatiPerAnnoByNumber = ordinaArrayByNumber(band.albums, "year");
console.log("albumOrdinatiPerAnnoByNumber: ", albumOrdinatiPerAnnoByNumber);
/*
const ordinaArrayByNumber = (array, field, compareFn) => {
    let albumsToBeSorted = [...array];
    return albumsToBeSorted.sort(compareFn)
}
*/
var ordinaAlbumsES5 = function () {};

console.log(band.albums[1].songs[2]);
