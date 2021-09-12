$(function tabsImg() {
  $('.work__item').on('click', function (e) {
    e.preventDefault();
    let targetEl = $(this);
    $('.work__item').each(function (el) {
      $(this).removeClass('work__focus-el');
    });
    targetEl.addClass('work__focus-el');
    $('.work__logo-item').each(function (el) {
      if (
        (targetEl.data('name') === $(this).data('name') &&
          !$(this).hasClass('hidden')) ||
        (targetEl.data('name') === 'all' && !$(this).hasClass('hidden'))
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

$(function addImg() {
  let counterBtn = 0;
  $('.work__button').on('click', function (e) {
    e.preventDefault();
    let counterEl = 0;
    $('.hidden').each(function (el) {
      let logoEl = $(this);
      if (counterEl < 12) {
        $(this).removeClass('hidden');
        if (
          $('.work__focus-el').data('name') === logoEl.data('name') ||
          $('.work__focus-el').data('name') === 'all'
        ) {
          logoEl.show();
        } else {
          logoEl.hide();
        }
        counterEl++;
      }
    });
    counterBtn++;
    if (counterBtn > 1) {
      $(this).remove();
    }
  });
});
