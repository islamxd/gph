

 $(window).load(function(){
   // PAGE IS FULLY LOADED  
   $('#loading-d').fadeOut();
  $('.fadeup').transition('fade up');
    $('.ui.embed').embed();
});

$(document).ready( function() {
  $('.computer.only .dropdown.item')
    .popup({
      inline     : true,
      hoverable  : true,
      position   : 'bottom left',
      delay: {
        show: 300,
        hide: 800
      }
    })
  ;
  $('.ui.dropdown').dropdown();
  $('.ui.accordion').accordion();

  // bind "hide and show vertical menu" event to top right icon button 
  $('#gp-mobile-menu-tog').click(function() {
    $('#gp-mobile-menu').toggle("250", "linear")
  });
});

 

       $(document).ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').css("background-color","rgba(8, 20, 42, 1)");
            $('.fixed.menu').css("height", "75px");
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').css("background-color","rgba(8, 20, 42, 0.4)");
            $('.fixed.menu').css("height", "80px");
          }
        });
        
      
   
      
    

       $("#gp-home-a").click(function (){
    $('html, body').animate({
        scrollTop: $("#gp-home").offset().top
        }, 500);
        });
       $("#gp-about-a").click(function (){
    $('html, body').animate({
        scrollTop: $("#gp-about").offset().top
        }, 500);
        });
       $("#gp-contact-a").click(function (){
    $('html, body').animate({
        scrollTop: $("#gp-contact").offset().top
        }, 500);
        });
       $("#gp-Whatwedo-a").click(function (){
    $('html, body').animate({
        scrollTop: $("#gp-Whatwedo").offset().top
        }, 500);
        });
       $("#gp-testimonial-a").click(function (){
    $('html, body').animate({
        scrollTop: $("#gp-testimonial").offset().top
        }, 500);
        });
       $("#gp-projects-a").click(function (){
    $('html, body').animate({
        scrollTop: $("#gp-projects").offset().top
        }, 500);
        });
});


    