// projects slides 
files=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]

function setprjs(){
    var i=Math.floor(Math.random() * (6) + 0)
    var sd=document.getElementById("its0") ;
    sd.style.background = "url('assets/prjs/"+files[i]+"')";
    var sd=document.getElementById("its1") ;
    sd.style.background = "url('assets/prjs/"+files[i]+"')";
    var sd=document.getElementById("its2") ;
    sd.style.background = "url('assets/prjs/"+files[i]+"')";
}

 setprjs();


 $('.right')
  .on('click', function() {setprjs(); });

$('.left')
  .on('click', function() {setprjs(); });
function setactive(scrl){

 $('.active.item').removeClass("active");
if(scrl<700){
 $("#gp-home-a").addClass("active");
}
if(700<scrl&&scrl<1100){
 $("#gp-about-a").addClass("active");
}
if(1100<scrl&&scrl<1700){
 $("#gp-Whatwedo-a").addClass("active");
  
}
if(1800<scrl&&scrl<2500){
 $("#gp-projects-a").addClass("active");
  
}
if(2500<scrl&&scrl<3200){
 $("#gp-testimonial-a").addClass("active");
  
}
if(3200<scrl){
 $("#gp-contact-a").addClass("active");
  
}
}

$(document).click(function(event) {
   setactive($(window).scrollTop());
});
$(window).scroll(function (event) {

   setactive($(window).scrollTop());
});