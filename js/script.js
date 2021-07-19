// ----------------------------------------------------------------------------
// Navbar 
// ----------------------------------------------------------------------------

// ------navbar-sticky-scroll-----
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");

      if (this.scrollY > 600) {
        $('.navbar').addClass("sticky1");

      } else {
        $('.navbar').removeClass("sticky1");
      }
      if (this.scrollY > 1300) {
        $('.navbar').addClass("sticky2");

      } else {
        $('.navbar').removeClass("sticky2");
      }
      if (this.scrollY > 2075) {
        $('.navbar').addClass("sticky3");

      } else {
        $('.navbar').removeClass("sticky3");
      }
      if (this.scrollY > 3910) {
        $('.navbar').addClass("sticky4");

      } else {
        $('.navbar').removeClass("sticky4");
      }

    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });


  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
  });
});


// ---------------Hamburger-action----------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// ----------------------------------------------------------------------------------------------
// Auto-Slider
// ----------------------------------------------------------------------------------------------
jQuery(document).ready(function ($) {
  var options = {
    $FillMode: 2,
    $AutoPlay: 1, 
    $Idle: 2000,
    $PauseOnHover: 1, 

    $ArrowKeyNavigation: 1, 
    $SlideEasing: $Jease$.$OutQuint, 
    $SlideDuration: 800, 
    $MinDragOffsetToSlide: 20,
    //$SlideWidth: 600,                           
    //$SlideHeight: 300,                          
    $SlideSpacing: 0, 
    $UISearchMode: 1,
    $PlayOrientation: 1, 
    $DragOrientation: 1, 

    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $ChanceToShow: 2, 
      $SpacingX: 8, 
      $Orientation: 1
    },

    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $ChanceToShow: 2 
    }
  };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);

  function ScaleSlider() {
    var bodyWidth = document.body.clientWidth;
    if (bodyWidth) jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
    else window.setTimeout(ScaleSlider, 30);
  }
  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);

});
// ----------------------------------------------------------------------------------------------
// Buy-card-effect
// ----------------------------------------------------------------------------------------------
VanillaTilt.init(document.querySelector(".buy-card"),{
  max: 20,
  speed: 400,
  glare: true,
})


// ---------------Reval element on scroll----------------
window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }

    // ----------------------------------------------------------------------------------------------
// Feature
// ----------------------------------------------------------------------------------------------


