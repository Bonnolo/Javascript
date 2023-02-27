import {
  UserComponent,
  PostListComponent,
  postComponent,
} from "./components/index.js";
import PostListComponent from "./components/postList.js";
import { filterUsers } from "./filter.js";
import { renderElement, renderInConsole, renderUsers } from "./render.js";
import { toJson } from "./utils.js";

const last10users = "http://jsonplaceholder.typicode.com/users";
const containerElement = document.querySelector("#users");
const filterElement = document.querySelector("#search");

const containerUserElement = document.querySelector("#user");
const containerPostElement = document.querySelector("#post");

let postListComponent = new PostListComponent(containerElement);

let users = [
  {
    name: "Bonny",
  },
  {
    name: "Marco",
  },
  {
    name: "Pepega",
  },
];

for (let user of users) {
  let userComponent = new UserComponent(user);
  renderElement(userComponent, containerUserElement);
}

let userComponent = new UserComponent(users);
renderElement(userComponent, containerUserElement);

let posts = [
  {
    title: "Titolo 1",
    body: "Corpo 1",
  },
  {
    title: "Titolo 2",
    body: "Corpo 2",
  },
  {
    title: "Titolo 3",
    body: "Corpo 3",
  },
];

for (let post of posts) {
  let postComponent = new PostComponent(post);
  renderElement(postComponent, containerPostElement);
}

let postComponent = new PostComponent(posts);
renderElement(postComponent, containerPostElement);

fetch(last10users)
  .then(toJson)
  .then(renderInConsole)
  .then((data) => {
    renderUsers(data, containerElement);
    filterElement.addEventListener("keyup", (event) => {
      let filter = filterElement.value.toLowerCase();
      let userFiltered = filterUsers(data, filter);
      renderUsers(userFiltered, containerElement);
    });
  });
