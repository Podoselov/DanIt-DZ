'use strict';

const styleEl = document.querySelector('.registr-style-info');
const wraperEl = document.querySelector('.wraper');

window.onload = function load() {
  if (localStorage.getItem('style') === 'dark') {
    wraperEl.classList.add('dark');
  }
};

function changeStyle() {
  wraperEl.classList.toggle('dark');
  if (wraperEl.classList.contains('dark')) {
    localStorage.setItem('style', 'dark');
  } else {
    localStorage.removeItem('style');
  }
}

styleEl.addEventListener('click', changeStyle);
