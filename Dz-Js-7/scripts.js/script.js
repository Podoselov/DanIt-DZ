'use strict';

let body = document.body;

function newList(arr, domEl = body) {
  let elLi;
  let newArr = arr.map((el) => {
    if (Array.isArray(el)) {
      elLi = newList(el, elDiv);
    } else {
      elLi = `<li>${el}</li>`;
    }
    return elLi;
  });
  let elUl = `<ul>${newArr.join('')}</ul>`;
  return (domEl.innerHTML = elUl);
}

let elDiv = document.querySelector('.list');
newList(
  [
    'Kharkiv',
    ['Mariupol', 'London'],
    'Kiev',
    ['Borispol', 'Irpin'],
    'Odessa',
    'Lviv',
    'Dnieper',
  ],
  elDiv
);
