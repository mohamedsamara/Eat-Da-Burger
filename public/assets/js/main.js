$(document).ready(function() {
  $('.waiting-devoured').addClass('left-popup');
  $('.bg').addClass('dark-overflow');
});

$('#devour-burgers').on('click', function() {
  $('.waiting-devoured').addClass('left-popup');
  $('.bg').addClass('dark-overflow');
});

$('#devoured-burgers').on('click', function() {
  $('.devoured').addClass('right-popup');
  $('.bg').addClass('dark-overflow');
});

$('.bg').on('click', function() {
  $('.waiting-devoured').removeClass('left-popup');
  $('.devoured').removeClass('right-popup');
  $('.bg').removeClass('dark-overflow');
});

$(document).on('click', '#devour-btn', function() {
  var id = $(this).attr('data-id');
  var element = $(this);
  var devouredItems = $('.devoured .list-group');

  var newElement = '';

  $.ajax({
    type: 'PUT',
    url: '/burgers/' + id,
    success: function() {
      alert('Burger devoured');
      element.parent().fadeOut(1000);
      $('.waiting-devoured').removeClass('left-popup');
      $('.devoured').addClass('right-popup');

      newElement +=
        '<li class="list-group-item">' +
        element.siblings('p').text() +
        "<i class='fas fa-check'></i></li>";

      devouredItems.append(newElement).fadeIn(2000);
    },

    error: function(err) {
      alert(err.responseText);
    }
  });
});

// validate add burger form
function validateForm() {
  var x = document.forms['add-burger']['burger_name'].value;
  if (x == '') {
    alert('Burger Name must be filled out');
    return false;
  }
}
