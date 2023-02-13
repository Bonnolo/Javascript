const renderInConsole = (args) => {
  console.log(args);
  return args;
};

const createElement = (data) => {
  let createNewElement = document.createElement("li");
  if (data.name) {
    createNewElement.innerHTML = `<span>${data.name}</span>`;
  } else {
    createNewElement.innerHTML = `<div>${data.title}</div>`;
  }
  return createNewElement;
};
const render = (data, container) => {
  let newElement = createElement(data);
  container.append(newElement);
};

const renderInDOM = (items, container) => {
  //svuotare il container
  container.innerHTML = "";
  //renderizza nella pagina HTML
  for (let item of items) {
    render(item, container);
  }
};

export { renderInConsole, renderInDOM };
