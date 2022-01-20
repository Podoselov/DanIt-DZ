'use strict';

import UserCard from './user-card.js';

async function displayUsers() {
  const response = await fetch(`https://ajax.test-danit.com/api/json/users/`);
  const users = await response.json();
  const tasksBoard = document.querySelector('.tasks-board');
  users.forEach(async (user) => {
    const {
      name,
      username,
      email,
      company: { name: companyname },
    } = user;
    const cardUser = new UserCard(name, username, email, companyname);
    tasksBoard.append(cardUser.render());

    const response = await fetch(
      `https://ajax.test-danit.com/api/json/users/${user.id}/todos`
    );
    const todos = await response.json();
    cardUser.renderTasks(todos);
  });
}

displayUsers();
