'use strict';

let userNumber = prompt('Enter a number ! ');
while (valid(userNumber)) {
  userNumber = prompt('Enter a number !', `${userNumber}`);
}
function valid(number, ...arg) {
  return (
    number === null ||
    typeof +number !== 'number' ||
    Number.isNaN(+number) ||
    !Number.isInteger(+number) ||
    number.trim() === ''
  );
}

function calcRemainder(number) {
  if (number < 0) {
    console.log('Sorry, no numbers');
  } else {
    for (let i = number; i >= 0; i--) {
      if (i % 5 === 0) {
        console.log(i);
      }
    }
  }
}

calcRemainder(userNumber);

let mNumber = prompt('Enter first number ! ');
let nNumber = prompt('Enter a second number ! ');
while (valid(mNumber) || valid(nNumber) || +mNumber > +nNumber) {
  mNumber = prompt(
    'The first number must be less than the second, please try again ! Enter first number ! ',
    `${mNumber}`
  );
  nNumber = prompt(
    'The first number must be less than the second, please try again ! Enter a second number ! ',
    `${nNumber}`
  );
}

function simpleNumber(m, n) {
  for (let i = m; i < n; i++) {
    if (i % m !== 0) {
      console.log(i);
    }
  }
}

simpleNumber(+mNumber, +nNumber);
