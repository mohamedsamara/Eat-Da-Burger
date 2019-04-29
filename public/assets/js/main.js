$(document).ready(function() {
  $('.waiting-devoured').addClass('left-popup');
  $('.bg').addClass('dark-overflow');
});

$('#test').on('click', function() {
  $('.waiting-devoured').addClass('left-popup');
  $('.devoured').addClass('right-popup');
  $('.bg').addClass('dark-overflow');
});

$('.bg').on('click', function() {
  $('.waiting-devoured').removeClass('left-popup');
  $('.devoured').removeClass('right-popup');
  $('.bg').removeClass('dark-overflow');
});
