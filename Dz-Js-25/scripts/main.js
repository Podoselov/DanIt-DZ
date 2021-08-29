'use strict';

let body = document.body;
let showEl = document.querySelectorAll('.slider__item');
let newArrEl = Array.from(showEl);
let counter = 0;

function clickSlider(e) {
  if (e.target.classList.contains('slider__btn--previous')) {
    newArrEl[counter].classList.remove('slider__item--show');
    counter--;
    if (counter < 0) {
      counter = newArrEl.length - 1;
    }
    newArrEl[counter].classList.add('slider__item--show');
  }
  if (e.target.classList.contains('slider__btn--next')) {
    newArrEl[counter].classList.remove('slider__item--show');
    counter++;
    if (counter >= newArrEl.length) {
      counter = 0;
    }
    newArrEl[counter].classList.add('slider__item--show');
  }
}

body.addEventListener('click', clickSlider);
