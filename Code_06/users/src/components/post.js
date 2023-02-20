class PostComponent {
  constructor(data) {
    this.title = data.title;
    this.body = data.body;
    this.template = `<div>
                        <h3>${data.title}</h3>
                        <p>${data.body}</p>
                    </div>`;
    this.element = document.createElement("li");
    this.element.innerHTML = this.template;
  }
}
export default PostComponent;
