class Book {
  constructor(title, author) {
    (this.title = title), (this.author = author);
  }
  getTitle() {
    console.log(`My title is ${this.title}`);
  }
}

let book1 = new Book("BlaBlaBla", "Non lo so");

let booksModels = [
  {
    title: "Title 1",
    author: "Author 1",
  },
  {
    title: "Title 2",
    author: "Author 2",
  },
  {
    title: "Title 3",
    author: "Author 3",
  },
  {
    title: "Title 4",
    author: "Author 4",
  },
];
let library = [];

for (let booksModel of booksModels) {
  let book = new Book(booksModel.title, booksModel.author);
  library.push(book);
}
for (let book of library) {
  book.getTitle();
}

class Video {
  constructor(title, uploader, seconds) {
    (this.title = title),
      (this.uploader = uploader),
      (this.duration = seconds),
      (this.watched = 0);
  }
  watch(secs) {
    this.duration -= secs;
    if (this.duration > 0) {
      this.watched += secs;
      let fullduration = this.duration + this.watched;
      console.log(
        `Hai guardato ${secs} secondi di ${this.title} e ti mancano ${this.duration} secondi su ${fullduration}`
      );
    } else {
      throw new Error("hai finito il video");
    }
  }
}
let pepega = new Video("Salve", "Bonny", 500);
pepega.watch(10);
pepega.watch(30);
pepega.watch(60);

const serverVideos = [
  {
    title: "Mi Ammazzo",
    uploader: "Bonny",
    seconds: 600,
  },
  {
    title: "la vita è così così",
    uploader: "Gianlu",
    seconds: 800,
  },
  {
    title: "La vita è Bella",
    uploader: "Giacomo",
    seconds: 1000,
  },
  {
    title: "La vita",
    uploader: "Orlando",
    seconds: 400,
  },
  {
    title: "La vita suca",
    uploader: "John",
    seconds: 500,
  },
];

let videos = [];

for (let video of serverVideos) {
  let thevideo = new Video(video.title, video.uploader, video.seconds);
  videos.push(thevideo);
}
for (let video of videos) {
  video.watch(100);
}
export { Video };
