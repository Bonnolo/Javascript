class PostComponent {
  constructor(data) {
    /* dati arrivanti dal server */
    this.title = data.title;
    this.body = data.body;
    /* presentazione dei dati */
    this.template = `<div>
                        <h3>${data.title}</h3>
                        <p>${data.body}</p>
                    </div>`;
    // elemento html costruito via js che poi vado ad inserire nel DOM
    this.element = document.createElement("li");
    this.element.innerHTML = this.template;
  }
}
export default PostComponent;
