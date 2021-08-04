'use strict';

function createNewUser() {
  let userName = prompt('Your name');
  while (valid(userName)) {
    userName = prompt('Your name', `${userName}`);
  }
  let userLastName = prompt('Your last name');
  while (valid(userLastName)) {
    userLastName = prompt('Your last name', `${userLastName}`);
  }

  function valid(value) {
    return value === null || value.trim() === '';
  }

  const newUser = {
    firstName: function setFirstName() {
      return userName;
    },
    lastName: function setLastName() {
      return userLastName;
    },
    getLogin: function () {
      return this.firstName()[0].toLowerCase() + this.lastName().toLowerCase();
    },
  };
  return newUser;
}

let user = createNewUser();
console.log(user.getLogin());
