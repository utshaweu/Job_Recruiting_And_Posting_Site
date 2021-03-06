$(function(){

  'use strict'

  //Preloader js
  $(window).on('load',function(){
    $(".preloader").delay(1000).fadeOut(1000);
  });
  

  var header = $(".start-style");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
      header.removeClass('start-style').addClass("scroll-on");
    } else {
      header.removeClass("scroll-on").addClass('start-style');
    }
  });

  //Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
    if ($(window).width() > 750) {
      var _d=$(e.target).closest('.nav-item');_d.addClass('show');
      setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
      },1);
    }
  });


  //Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
   });
  
  // Back to top js
  var back2top = $(".back-to-top");
  var html_body = $('html,body');
  back2top.click(function(){
    html_body.animate({scrollTop:0},1000);
  });

  //Testimonial Slider
  $('.stories-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed:1000,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode:false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      ]
  });

  //Counter Up Js
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });

});