'use strict';

function createUser() {
  let user = {
    name: '',
    lastName: '',
    tabel: [],
  };

  function addName() {
    let userName = prompt('Введите ваше имя');
    while (valid(userName)) {
      userName = prompt('Введите ваше имя', `${userName}`);
    }
    user.name = userName;
  }

  function addLastName() {
    let userLastName = prompt('Введите вашу фамилию');
    while (valid(userLastName)) {
      userLastName = prompt('Введите вашу фамилию', `${userLastName}`);
    }
    user.lastName = userLastName;
  }

  function addThemeName() {
    let themeName = '';
    let themeRating = '';
    do {
      themeName = prompt('Название предмета ?');
      if (themeName === null) break;
      themeRating = prompt('Введите оценку');
      user.tabel.push({ [themeName]: themeRating });
    } while (themeName);
  }

  function calculatRating(arr) {
    let newRating = arr.map((el) => {
      for (const key in el) {
        return el[key];
      }
    });
    newRating.forEach((el) => {
      if (el < 3) {
      }
    });
    console.log(newRating);
  }

  function valid(value) {
    return value === null || value.trim() === '';
  }

  addName();
  addLastName();
  addThemeName();
  calculatRating(user.tabel);
  console.log(user);
}

createUser();
