'use strict';

let num1 = prompt('First number');
while (valid(num1)) {
  num1 = prompt('First number', `${num1}`);
}

let num2 = prompt('Second number');
while (valid(num2)) {
  num2 = prompt('First number', `${num2}`);
}

let operator = prompt('What operation: + , - , / , * ');

function valid(number, ...arg) {
  return (
    number === null ||
    typeof +number !== 'number' ||
    Number.isNaN(+number) ||
    !Number.isInteger(+number) ||
    number.trim() === ''
  );
}

function calc(firstItem, secondItem, operation) {
  let res = '';
  switch (operation) {
    case '+':
      res = Number(firstItem) + Number(secondItem);
      break;
    case '-':
      res = firstItem - secondItem;
      break;
    case '/':
      res = firstItem / secondItem;
      break;
    case '*':
      res = firstItem * secondItem;
      break;

    default:
      alert('Wrong operator');
      break;
  }
  return res;
}

console.log(calc(num1, num2, operator));
