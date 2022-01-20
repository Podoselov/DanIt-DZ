'use strict';
class UserCard {
  constructor(name, username, email, company) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.company = company;
  }
  createElement(elemType, classNames, text) {
    const element = document.createElement(elemType);
    if (text) {
      element.textContent = text;
    }
    element.classList.add(...classNames);
    return element;
  }
  renderHeader() {
    const header = this.createElement('div', ['card-header']);
    header.insertAdjacentHTML(
      'afterbegin',
      `<a href="mailto:${this.email}">${this.name}</a><br><span>(@${this.username})</span>`
    );
    return header;
  }
  renderBody() {
    const body = this.createElement('div', ['card-body']);
    this.tasksContainer = this.createElement('ul', ['list-group', 'task-list']);
    body.append(this.tasksContainer);
    return body;
  }
  renderTasks(todos) {
    todos.forEach((todo) => {
      const li = this.createElement(
        'li',
        ['list-group-item', 'task-list--item', 'list-group-item-action'],
        todo.title
      );
      if (todo.completed) {
        li.classList.add('task-list--item-completed');
      }
      this.tasksContainer.append(li);
    });
  }
  renderFooter() {
    const footer = this.createElement('div', ['card-footer']);
    footer.insertAdjacentHTML(
      'afterbegin',
      `<small class="text-muted">${this.company}</small>`
    );
    return footer;
  }
  render() {
    const userCard = this.createElement('div', ['card', 'user-card']);
    userCard.append(
      this.renderHeader(),
      this.renderBody(),
      this.renderFooter()
    );
    return userCard;
  }
}

export default UserCard;
