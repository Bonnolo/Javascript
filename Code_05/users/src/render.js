const renderInConsole = (args) => {
  console.log(args);
  return args;
};

const createUserElement = (user) => {
  let userElement = document.createElement("li");
  userElement.innerHTML = `<span>${user.name}</span>`;
  return userElement;
};
const renderUser = (user, container) => {
  let userElement = createUserElement(user);
  container.append(userElement);
};

const renderInDOM = (data, container) => {
  //renderizza nella pagina HTML
  for (let user of data) {
    renderUser(user, container);
  }
};

export { renderInConsole, renderInDOM };
