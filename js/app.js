// Slick Slider
$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
  });
});

// Smooth Scroll
$(function () {
  $('a.nav-link').click(function (e) {
    e.preventDefault();

    let section_id = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      'easeInOutExpo'
    );
  });
});

// MixItUp
var mixer = mixitup('.mixitupcontainer');
$('#five .list-inline-item a').click(function (e) {
  e.preventDefault();
});

// Counter Js
$('.counter-icon').counterUp({
  //   delay: 10,
  time: 1500,
});

// Page Animation
$(document).ready(function () {
  new WOW().init();
});
