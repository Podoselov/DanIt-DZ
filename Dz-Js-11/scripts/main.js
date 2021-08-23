'use strict';

let body = document.body;

function changeBgColor(e) {
  let buttonEl = document.querySelectorAll('.btn');
  Array.from(buttonEl).forEach((el) => {
    if (e.key.toLocaleLowerCase() === el.textContent.toLocaleLowerCase()) {
      el.style.backgroundColor = 'blue';
    } else {
      el.style.backgroundColor = 'black';
    }
  });
}

body.addEventListener('keyup', changeBgColor);
