
$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').removeClass('show');
});

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar').hide();
  setTimeout(function() {
    $('.navbar').fadeIn()
  }
    , 1000);
});

