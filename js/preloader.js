// $(document).ready(function($) {
//     var Body = $('body');
//     Body.addClass('preloader-site');
// });
// $(window).load(function() {
//     $('.preloader-wrapper').fadeOut();
//     $('body').removeClass('preloader-site');
// });

//   setTimeout(function(){
//     $('#preloader').fadeOut('slow', function() {
//       $(this).remove();
//     });
//   }, 1500);

/* global $ */
$(function(){ // this replaces document.ready
     $('#preloader').delay(5000).fadeOut('slow', function() {
      $(this).remove();
    });
});