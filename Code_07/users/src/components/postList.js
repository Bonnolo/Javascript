class PostListComponent {
  selector;

  constructor(selector) {
    this.selector = selector;
    this.containerElement = document.querySelector(this.selector);
  }
}
export default PostListComponent;
