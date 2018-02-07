
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#footermain').fadeIn();
    } else {
        $('#footermain').fadeOut();
    }
});
$(document).ready(function() {
    $("#footer").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
$(document).ready(function (){
  $("#headermainb").click(function(event){    
  event.preventDefault();            
         $('html, body').animate({
              scrollTop: $("#aa").offset().top
        }, 1000);               
    });
});
$(document).ready(function (){
  $("#headermainc").click(function(event){    
  event.preventDefault();            
         $('html, body').animate({
              scrollTop: $("#ab").offset().top
        }, 1000);               
    });
});
$(document).ready(function (){
  $("#headermaind").click(function(event){    
  event.preventDefault();            
         $('html, body').animate({
              scrollTop: $("#zz").offset().top
        }, 1000);               
    });
});
function show(){
  document.getElementById('dropdown').style.display='block';
}
function hide(){
  document.getElementById('dropdown').style.display='none';
}

 
