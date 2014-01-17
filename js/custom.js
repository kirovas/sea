$(document).ready(function() {
            $('.block').mouseover(function(){
      $(this).find('.hover-img').stop( true, true ).fadeIn( "slow");
    });
	$('.block').mouseout(function(){
      $(this).find('.hover-img').stop( true, true ).fadeOut( "fast");
    });
 
      });