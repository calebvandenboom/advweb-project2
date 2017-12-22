$(document).scroll(function(){

	var y = $(document).scrollTop();
	
    if ( y > 40){
   	        $('#header_fader-text').stop(true).animate({left: '100px'}, 50);
            $('#header_fader-icon').stop(true).animate({right: '-105px'}, 50);
            $('#header_fader-text-clip').stop(true).animate({right: '150px'}, 50);
        }
    
	else {
            $("#header_fader-text").stop(true).animate({left: '0px'}, 50);
            $("#header_fader-icon").stop(true).animate({right: '0px'}, 50);
            $('#header_fader-text-clip').stop(true).animate({right: '0px'}, 50);
		}
});
