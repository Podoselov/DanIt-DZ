'use strict';

let imgEl = document.querySelectorAll('.image-to-show');
let buttonStop = document.querySelector('.button-stop');
let buttonStart = document.querySelector('.button-start');
let counter = 0;

function changeClassEl() {
  imgEl[counter].classList.remove('image-show-now');
  counter++;
  if (counter >= imgEl.length) {
    counter = 0;
  }
  imgEl[counter].classList.add('image-show-now');
}

let timer = setInterval(changeClassEl, 3000);

buttonStop.addEventListener('click', () => {
  clearInterval(timer);
  buttonStart.removeAttribute('disabled');
});

buttonStart.addEventListener('click', () => {
  timer = setInterval(changeClassEl, 3000);
  buttonStart.setAttribute('disabled', 'disabled');
});
