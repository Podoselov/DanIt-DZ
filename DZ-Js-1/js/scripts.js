'use strict';
let userName = '';
let userAge = '';
do {
  userName = prompt('Enter your name', `${userName}`);
  userAge = prompt('How old are you', `${userAge}`);
} while (
  userName === null ||
  userName.trim() === '' ||
  userAge === null ||
  typeof +userAge !== 'number' ||
  isNaN(+userAge) ||
  userAge.trim() === ''
);

function authorization(name, age) {
  let errorMessage = 'You are not allowed to visit this website';
  let allowed = `Welcome,  ${name} !`;
  if (age < 18) {
    alert(`${errorMessage}`);
  } else if (age > 22) {
    alert(`${allowed}`);
  } else {
    let continuationQuestion = confirm('Are you sure you want to continue?')
      ? alert(`${allowed}`)
      : alert(`${errorMessage}`);
  }
}

authorization(userName, userAge);
