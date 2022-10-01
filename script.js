$('li.ingredient').hide().fadeIn(1700);
$('li.ingredient').on('click', function crossOut () {
  $(this).css('text-decoration', 'line-through red');
});