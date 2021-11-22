class Card {
  constructor(email, name, title, body, postId) {
    this.email = email;
    this.name = name;
    this.title = title;
    this.body = body;
    this.postId = postId;
  }

  render() {
    const containerEl = document.querySelector('.container');
    const mainEL = document.createElement('div');
    mainEL.innerHTML = `
    <div class="comments">
    <div class="cl-btn-7"></div>
    <p class="comments__user-name">
      ${this.name}
      <a href="#" class="comments__user-mail">${this.email}</a>
    </p>
    <h2 class="comments__heading">${this.title}</h2>
    <p class="comments__text" data-id="${this.postId}">
      ${this.body}
    </p>
  </div>`;
    return containerEl.append(mainEL);
  }
}

export { Card };
