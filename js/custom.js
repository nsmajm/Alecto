$(document).ready(function(){
 
$(window).scroll(function() { 
        if ($(document).scrollTop() > 100) {  window
          $(".navbar-fixed-top").css("background-color", "#011217"); 
        }
        else {
          $(".navbar-fixed-top").css("background-color", "transparent"); 
        }
      });
    
});
 $('.carousel-control').click(function(e){
	e.preventDefault();
	$('#myCarousel').carousel( $(this).data() );
});