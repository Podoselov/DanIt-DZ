$(function showActiveEl() {
  $('.services__link').on('click', function (e) {
    e.preventDefault();
    $('.services__link').each(function (el) {
      $(this).removeClass('active-el');
    });
    $(this).addClass('active-el');
    let dataValue = $(this).data('name');
    $('.services__description').each(function (el) {
      $(this).removeClass('services__description--show');
      if ($(this).data('name') === dataValue) {
        $(this).addClass('services__description--show');
      }
    });
  });
});
