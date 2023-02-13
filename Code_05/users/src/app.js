import { filterUsers } from "./filter.js";
import { renderInConsole, renderInDOM } from "./render.js";
import { toJson } from "./utils.js";

const last10users = "http://jsonplaceholder.typicode.com/users";
const containerElement = document.querySelector("#users");
const filterElement = document.querySelector("#search");

fetch(last10users)
  .then(toJson)
  .then(renderInConsole)
  .then((data) => {
    renderInDOM(data, containerElement);
    filterElement.addEventListener("keyup", (event) => {
      let filter = filterElement.value.toLowerCase();
      let userFiltered = filterUsers(data, filter);
      renderInDOM(userFiltered, containerElement);
    });
  });
