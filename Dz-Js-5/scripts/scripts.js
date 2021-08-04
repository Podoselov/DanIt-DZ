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
  let userBirthDay = prompt('Your birthday', 'dd.mm.yyyy');
  while (valid(userBirthDay)) {
    userBirthDay = prompt('Your birthday', 'dd.mm.yyyy');
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
    birthday: userBirthDay,
    password: function getPassword() {
      let result = '';
      return (result =
        this.firstName()[0].toUpperCase() +
        this.lastName().toLocaleLowerCase() +
        this.birthday.slice(6, 10));
    },
    age: function getAge() {
      let result = '';
      let date = new Date();
      let dayNow = date.getDate();
      let monthNow = date.getMonth() + 1;
      let yearNow = date.getFullYear();
      let userDay = this.birthday.slice(0, 2);
      let userMonth = this.birthday.slice(3, 5);
      let userYear = this.birthday.slice(6, 10);
      if (userMonth > monthNow || (userMonth == monthNow && userDay > dayNow)) {
        result = yearNow - userYear - 1;
      } else {
        result = yearNow - userYear;
      }
      return result;
    },
    getLogin: function () {
      return this.firstName()[0].toLowerCase() + this.lastName().toLowerCase();
    },
  };
  return newUser;
}

let user = createNewUser();
console.log(user.age());
console.log(user.password());
