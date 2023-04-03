let books = [
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
]

for (const book of books) {
    let bookDetails = `${book.title} by ${book.author}`
    if(book.readingStatus) {
        console.log(`Already read ${bookDetails}`)
    } else {
        console.log(`You still need to read ${bookDetails}`)
    }
}