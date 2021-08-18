'use strict';

let elTabs = document.querySelector('.tabs');
let elTabsLi = document.querySelectorAll('.tabs-title');
let elTabsText = document.querySelectorAll('.tabs-text');

function removeActive(e) {
  Array.from(elTabsLi).forEach((el) => {
    el.classList.remove('active');
  });
  e.target.classList.add('active');
  Array.from(elTabsText).forEach((el) => {
    if (el.classList.contains(e.target.textContent.toLowerCase())) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

elTabs.addEventListener('click', removeActive);
