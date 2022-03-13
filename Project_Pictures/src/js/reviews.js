$(function slider() {
  let counter = 2;
  let arrEl = Array.from($('.reviews__slider-list'));
  let arrBlockEl = Array.from($('.reviews__description'));
  $('.reviews__button-previous').on('click', function (e) {
    e.preventDefault();
    arrEl[counter].classList.remove('hover-el');
    arrBlockEl[counter].classList.remove('hide-el');
    counter--;
    if (counter < 0) {
      counter = arrEl.length - 1;
    }
    arrEl[counter].classList.add('hover-el');
    arrBlockEl[counter].classList.add('hide-el');
  });
  $('.reviews__button-next').on('click', function (e) {
    e.preventDefault();
    arrEl[counter].classList.remove('hover-el');
    arrBlockEl[counter].classList.remove('hide-el');
    counter++;
    if (counter >= arrEl.length) {
      counter = 0;
    }
    arrBlockEl[counter].classList.add('hide-el');
    arrEl[counter].classList.add('hover-el');
  });
  $('.reviews__slider-list').on('click', function (e) {
    e.preventDefault();
    counter = $(this).index();
    $('.hover-el').removeClass('hover-el');
    $('.hide-el').removeClass('hide-el');
    arrBlockEl[counter].classList.add('hide-el');
    arrEl[counter].classList.add('hover-el');
  });
});
