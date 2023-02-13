const empty = {};
console.log('questo è il mio oggetto vuoto', empty);

const band = {
    nome: 'Budini One Direction Molli',
    componenti: 4,
    bravi: true,
};

console.log(typeof band);
console.log(typeof band.componenti);

band.genere = 'funk';
band.like = true;

delete band.like;

//band.albums = ['primo album', 'secondo album', 'terzo album', true];
//band.song = ['primo', 'seconda'];

band.albums = [
    {
    title: 'primo album',
    year: 1983,
    song: [
        'prima canzone del primo album',
        'seconda canzone del primo album',
        'terza canzone del primo album',
        ]
    },
    {
        title: 'secondo album',
        year: 1985,
        song: [
            'prima canzone del secondo album',
            'seconda canzone del secondo album',
            'terza canzone del secondo album',
        ]
    }
];

band.albums.push({
    title: 'terzo album',
    year: 1970,
    songs: [
        'prima canzone del terzo album',
        'seconda canzone del terzo album',
        'terza canzone del terzo album',
    ]
});
console.log(band.albums)

const sortAlbums = () => {
    return band.albums.sort((albumA, albumB) => {
        return albumA.year - albumB.year;
    })
}
sortAlbums()