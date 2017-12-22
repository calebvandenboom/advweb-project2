$(document).scroll(function () {

var y = $(document).scrollTop();
    

    if ( y < 400){
           $("#header").slideUp(100); // we’re using .slideUp/Down for brining the footer up/down instead of animate
        }
    else {
         $('#header').slideDown(100);
        }
  
});
