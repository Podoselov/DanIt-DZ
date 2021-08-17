'use strict';

let userNumber = prompt('Add number');
while (valid(userNumber)) {
  userNumber = prompt('Add number', `${userNumber}`);
}

function valid(number) {
  return (
    number === null ||
    number.trim() === '' ||
    typeof +number !== 'number' ||
    Number.isNaN(+number) ||
    !Number.isInteger(+number)
  );
}

function fib(F0, F1, n) {
  if (n >= 1) {
  }
}
