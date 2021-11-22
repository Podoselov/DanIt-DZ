'use strict';

import { Card } from './classCard.js';

const getUsers = async () => {
  try {
    const responseUsers = await fetch(
      'https://ajax.test-danit.com/api/json/users'
    );
    const dataUsers = await responseUsers.json();
    return getUsersPosts(dataUsers);
  } catch (error) {
    console.log(error);
  }
};

const getUsersPosts = async (dataUsers) => {
  dataUsers.forEach(async ({ id, email, name }) => {
    try {
      const responseUsersPosts = await fetch(
        `https://ajax.test-danit.com/api/json/users/${id}/posts`
      );
      const dataUsersPosts = await responseUsersPosts.json();
      dataUsersPosts.forEach(async ({ title, body, id: postId }) => {
        const newPost = await new Card(email, name, title, body, postId);
        return newPost.render();
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const removePosts = async (idPost) => {
  const response = await fetch(
    `https://ajax.test-danit.com/api/json/posts/${idPost}`,
    { method: 'DELETE' }
  );
  return await response;
};

const container = document.querySelector('.container');
container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.className === 'cl-btn-7') {
    const perentEL = e.target.parentElement;
    const idPost = perentEL.lastElementChild.dataset.id;
    try {
      await removePosts(idPost);
      perentEL.classList.add('hidden');
    } catch (error) {
      console.log(error);
    }
  }
});

getUsers();
