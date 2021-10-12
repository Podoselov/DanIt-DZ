$('.header__burger').on('click', function () {
  $(this).toggleClass('header__burger--open');
  $('.header__nav-list').toggleClass('header__nav-list--open');
});
