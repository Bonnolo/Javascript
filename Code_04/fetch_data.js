const last10users = "http://jsonplaceholder.typicode.com/users";

/**
 *
 * @param {Response} response
 * @returns {promise}
 */
const toJson = (response) => {
  return response.json();
};

const injectUsersInHTML = (data) => {
  let container = document.querySelector("ul");
  for (let user of data) {
    renderUser(user, container);
  }
};

const toText = (response) => {
  return response.text();
};

//TODO inserire link mdn di fetch api
fetch(last10users)
  .then(toJson)
  .then((users) => {
    console.log(users);

    let container = document.querySelector("ul");
    for (let user of users) {
      renderUser(user, container);
    }
  });
// stessa roba scritta in maniera diversa
/* let usersPromise = fetch("qui_ci_va_indirizzo_server_per_recuperare_dati");
let userstoJson = usersPromise.then(toJson).then((users) => {
  console.log(users);

  let container = document.querySelector("ul");
  for (let user of users) {
    renderUser(user, container);
  }
}); */

const renderUser = (user, container) => {
  let userElement = document.createElement("li");
  userElement.innerHTML = `<span>${user.name}</span>`;
  container.append(userElement);
};
