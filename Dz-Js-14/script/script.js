$(function () {
  $('.nav-container a').on('click', function (e) {
    e.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 1000);
  });

  $('.scroll-button').on('click', function (e) {
    e.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 1000);
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > $(window).height()) {
    $('.scroll-button').show();
  } else {
    $('.scroll-button').hide();
  }
});

$('.hidden-section').click(function () {
  $('#news').slideToggle('slow');
});
