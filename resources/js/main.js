// $(document).ready(function(){
//     $(".monthly-button").click(function(e){
//         e.preventDefault();
//         $(".price-1").text("$99");
//     });
//     $(".annually-button").click(function(e){
//       e.preventDefault();
//         $(".price-2").text("$200");
//     });
    
//   });


$(document).ready(function(){
    $(".monthly-button").click(function(e){
        e.preventDefault();
        $(".price-1").text("$0");
        $(".price-2").text("$99");
    });
    $(".annually-button").click(function(e){
      e.preventDefault();
        $(".price-1").text("$99");
        $(".price-2").text("$200");
    });

    // ===add class== remove class==

    $(".annually-button").click(function(){
        $(".monthly-button").removeClass("btn");
        $(".add-padding-annually").removeClass("padding-40px");
      });

      $(".annually-button").click(function(){
        $(".annually-button").addClass("btn");
        $(".add-padding-monthly").addClass("padding-40px");
      });


      $(".monthly-button").click(function(){
        $(".annually-button").removeClass("btn");
        $(".add-padding-monthly").removeClass("padding-40px");
      });

      $(".monthly-button").click(function(){
        $(".monthly-button").addClass("btn");
        $(".add-padding-annually").addClass("padding-40px");
      });


    //   Owl=========================

    $(".owl-carousel").owlCarousel({
        nav: false,
        items: 1,
        // autoplay: true,
    });

$('.slider-left').click(function(){
    $('.owl-prev').trigger('click');
});
$('.slider-right').click(function(){
    $('.owl-next').trigger('click');
});

// faq collapse expand====

$(".plus-1").click(function(){
  $(".hide-1").slideToggle("slow");
});
$(".plus-2").click(function(){
  $(".hide-2").slideToggle("slow");
});
$(".plus-3").click(function(){
  $(".hide-3").slideToggle("slow");
});
$(".plus-4").click(function(){
  $(".hide-4").slideToggle("slow");
});

// Sticky-menu=============================
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('#header').addClass('sticky');
        $('.main-nav ul li a').css('color', 'white');
        $(".logo").empty();
        $('.logo').prepend('<img  src="resources/img/footer-logo.png" />')
  }

  else {
        $('#header').removeClass('sticky');
        $('.main-nav ul li a').css('color', 'black');
        $('.main-nav ul li:last-child a').css('color', 'white');
        $(".logo").empty();
        $('.logo').prepend('<img  src="resources/img/logo.png" />')
  }
})

// mobile menu===========

$(".mobile-logo").on("click", function() {
  $(".mobile-menu").toggleClass("showing");
});

$(".mobile-menu-items ul li a").click(function(){
  $(".mobile-menu").removeClass("showing");
});
    
  });