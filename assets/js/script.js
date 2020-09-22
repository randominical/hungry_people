$(document).ready(function(){
  $('.menu__list, .fullscreen__main').on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
})

$('.menu__link').click(function(event) {
    $('.icon-menu').removeClass('active');
    $('.menu__body').removeClass('active');
    $('body').removeClass('lock');
})

$(function() {
  var menu_h = $('.menu').height();
  var menu_p = window.pageYOffset;           
  $(window).on('scroll', function () {             
    if ($(window).scrollTop() >= menu_h) { 
      $('.header').addClass('hidden');
    } else {                        
      $('.header').removeClass('hidden');
    }
  }).ready(function() {
    if (menu_p >= menu_h) { 
      $('.header').addClass('hidden');
    } else {                        
      $('.header').removeClass('hidden');
    }
  });
});

$(document).ready(function(){
  $("#book-sub").click(function(){
    $("#form-book:valid").submit();
  });
  $("#form-book").submit(function( event ){
    event.preventDefault();
    $(".book_sent").text("Request has been sent")
  });
  $("#cont-sub").click(function(){
    $("#form-cont:valid").submit();
  });
  $("#form-cont").submit(function( event ){
    event.preventDefault();
    $(".contact_sent").text("Message has been sent")
  });
});

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    draggable: true,
    arrows: false,
    dots: true,
  });
});

(function($) {
  $(function() {
    $("ul.tabs__captions").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);