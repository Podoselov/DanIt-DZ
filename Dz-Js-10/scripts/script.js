'use strict';

let elUl = document.querySelector('.password-form');

function clickForm(e) {
  if (e.target.classList.contains('fa-eye')) {
    e.target.classList.remove('fa-eye');
    e.target.classList.add('fa-eye-slash');
    e.target.previousElementSibling.type = 'text';
  } else if (e.target.classList.contains('fa-eye-slash')) {
    e.target.classList.remove('fa-eye-slash');
    e.target.classList.add('fa-eye');
    e.target.previousElementSibling.type = 'password';
  }
  let inputEl1 = document.querySelector('.input-value1');
  let inputEl2 = document.querySelector('.input-value2');
  let errorEl = document.querySelector('.input-error');
  if (e.target.classList.contains('btn')) {
    if (inputEl1.value === inputEl2.value) {
      alert('You are welcome');
      errorEl.style.opacity = '0';
      inputEl1.value = '';
      inputEl2.value = '';
    } else {
      errorEl.style.opacity = '1';
    }
  }
}

elUl.addEventListener('click', clickForm);
