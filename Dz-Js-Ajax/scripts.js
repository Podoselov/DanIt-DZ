'use strict';

const getEl = async () => {
  try {
    const response = await fetch('https://ajax.test-danit.com/api/swapi/films');
    const data = await response.json();
    return getCharacters(data);
  } catch (error) {
    console.log(error.name);
  } finally {
    const loaderEl = document.querySelector('.loader');
    loaderEl.style.display = 'none';
  }
};

const getCharacters = async (data) => {
  const elUl = document.createElement('ul');
  data.forEach(async ({ name, episodeId, openingCrawl, characters }) => {
    const elLI = document.createElement('li');
    const actorListItemEl = document.createElement('ul');
    elLI.innerHTML += `
    <h2 class="film__name">${episodeId} ${name}</h2>
    <p class="film__info">${openingCrawl}</p>
    `;
    characters.forEach(async (el) => {
      const elALi = document.createElement('li');
      const responseActor = await fetch(el);
      const dataActor = await responseActor.json();
      const { name: actorName } = dataActor;
      elALi.innerHTML = `${actorName}`;
      actorListItemEl.append(elALi);
      return elLI.append(actorListItemEl);
    });
    elUl.append(elLI);
  });
  return document.body.append(elUl);
};

getEl();
