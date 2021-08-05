'use strict';

let userNumber = prompt('Add number !');
while (valid(userNumber)) {
  userNumber = prompt('Add number !', `${userNumber}`);
}

function valid(number) {
  return (
    number === null ||
    typeof +number !== 'number' ||
    Number.isNaN(+number) ||
    !Number.isInteger(+number) ||
    number.trim() === ''
  );
}

let factorial = (num) => (num ? num * factorial(num - 1) : 1);

console.log(factorial(userNumber));
