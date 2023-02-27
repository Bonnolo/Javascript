const renderInConsole = (args) => {
  console.log(args);
  return args;
};

const createElement = (data) => {
  let createNewElement = document.createElement("li");
  createNewElement.innerHTML = `<span>${data.name}</span>`;
  return createNewElement;
};
const createPostElement = (post) => {
  let postElement = document.createElement("li");
  postElement.innerHTML = `<div>
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                          </div>`;
  return postElement;
};
const renderUser = (data, container) => {
  let newElement = createElement(data);
  container.append(newElement);
};

const renderPost = (post, container) => {
  let postElement = createPostElement(post);
  container.append(postElement);
};

const renderUsers = (data, container) => {
  //svuotare il container
  container.innerHTML = "";
  //renderizza nella pagina HTML
  for (let user of data) {
    renderUser(user, container);
  }
};

const renderPosts = (data, container) => {
  //svuotare il container
  container.innerHTML = "";
  //renderizza nella pagina HTML
  for (let post of data) {
    renderPost(post, container);
  }
};

const renderElement = (component, container) => {
  container.append(component.element);
};

const renderList = (components, container) => {
  //svuotiamo il container
  container.innerHTML = "";
  for (let component of components) {
    renderElement(component, container);
  }
};
export { renderInConsole, renderPosts, renderUsers, renderElement };
