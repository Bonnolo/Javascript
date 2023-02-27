import { renderInConsole, renderPosts } from "../../users/src/render.js";
import { toJson } from "../../users/src/utils.js";

const postURL = "https://jsonplaceholder.typicode.com/posts";
const containerElement = document.querySelector("#posts");

fetch(postURL)
  .then(toJson)
  .then(renderInConsole)
  .then((data) => {
    renderPosts(data, containerElement);
  });
