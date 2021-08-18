'use strict';

let elInput = document.querySelector('.price__input');
let elP = document.querySelector('.price__error');
let elDiv = document.querySelector('.price__message');
let elValue = document.querySelector('.price__value');
let elButton = document.querySelector('.price__button');

function focusInInput() {
  elInput.style.color = 'black';
  elInput.style.outline = '1px solid green';
}

function focusOutInput() {
  if (elInput.value < 0 || elInput.value.trim() === '') {
    elDiv.style.opacity = '0';
    elP.style.opacity = '1';
    elInput.style.outline = '1px solid red';
    elInput.value = '';
  } else {
    elP.style.opacity = '0';
    elValue.textContent = elInput.value;
    elDiv.style.opacity = '1';
    elInput.style.color = 'green';
  }
}

function hiddenSpan() {
  elInput.style.outline = 'none';
  elDiv.style.opacity = '0';
  elInput.value = '';
  elInput.style.color = 'black';
}

elButton.addEventListener('click', hiddenSpan);
elButton.addEventListener('click', (e) => {
  e.preventDefault();
});
elInput.addEventListener('focusout', focusOutInput);
elInput.addEventListener('focusin', focusInInput);
