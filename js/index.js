// var p = prompt("merge!")
/*global $*/
var $item = $('.carousel-item');
var $wHeight = $(window).height();
var $wWidth = $(window).width();

// $item.eq(0).addClass('active');

$item.height($wHeight);
$item.width($wWidth);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  $(this).parent().css({
    'background' : 'url(' + $src + ')'
  });
  $(this).remove();
});
// $item.eq(0).addClass('active');

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $wWidth = $(window).width();
  $item.height($wHeight);
  $item.width($wWidth);
});
