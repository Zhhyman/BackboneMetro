  function showInfoStand(){
	for(var i = 1; i <= 3; i++) {
	  $('.col'+i).each(function(){
		$(this).addClass('fadeInForward-'+i).removeClass('fadeOutback');
	  });
	}
  }
		
  function fadeInfoStand(){
	for(var i = 1; i <= 3; i++) {
	  $('.col'+i).addClass('fadeOutback').removeClass('fadeInForward-'+i);
	}
  }