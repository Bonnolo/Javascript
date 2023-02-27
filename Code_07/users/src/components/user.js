class UserComponent {
  constructor(data) {
    this.name = data.name;
    this.template = `<span>${data.name}</span>`;
    this.element = document.createElement("li");
    this.element.innerHTML = this.template;
  }
}

export default UserComponent;
