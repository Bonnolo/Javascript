import { Video } from "./ex_01.js";

class MusicVideo extends Video {
  constructor(title, uploader, seconds, artist) {
    super(title, uploader, seconds);
    this.artist = artist;
  }
}
