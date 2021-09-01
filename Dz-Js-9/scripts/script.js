// 'use strict';

// let elTabs = document.querySelector('.tabs');
// let elTabsLi = document.querySelectorAll('.tabs-title');
// let elTabsText = document.querySelectorAll('.tabs-text');

// function removeActive(e) {
//   Array.from(elTabsLi).forEach((el) => {
//     el.classList.remove('active');
//   });
//   e.target.classList.add('active');
//   Array.from(elTabsText).forEach((el) => {
//     if (el.classList.contains(e.target.textContent.toLowerCase())) {
//       el.classList.remove('hidden');
//     } else {
//       el.classList.add('hidden');
//     }
//   });
// }

// elTabs.addEventListener('click', removeActive);

const elTabsLi = $('.tabs-title');

$(function removeActive() {
  $('.tabs li').on('click', function (e) {
    elTabsLi.each(function (el) {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    let textEl = $(this).text().toLowerCase();
    $('.tabs-content li').each(function (el) {
      if ($(this).hasClass(textEl)) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  });
});
