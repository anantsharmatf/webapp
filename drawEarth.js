$(document).ready(function(){
	var width = $(window).width();
	var height = $(window).height();
	var centerx = width/2;
	var centery = height/2;
	var h = centery/2;
	var radius = (0.3*centery);
	var speed = 500;
	var r = centery-(centery-radius);
	$('.circle').css({"width":width,"height":height});
	$('#circlee').css("left",centerx);
	$('#circlee').css("top",h);
	$("#circlee").css('border-radius',r);
	$("#circlee").css('background-size',(4.2*r));
	$("#circlee").animate({width:(2*r),height:(2*r),left:centerx-r,top:h-r},speed);
	$("#angular").css('top',(h+2*r+50));
	});
$(document).ready(function() {
	$(window).resize(function(){
		var width = $(window).width();
		var height = $(window).height();
		var centerx = width/2;
		var centery = height/2;
		var h = centery/2;
		var radius = (0.3*centery);
		var r = centery-(centery-radius);
		$('#circlee').css("left",centerx-r);
		$('#circlee').css("top",h-r);
		$('#circlee').css("width",(2*r));
		$('#circlee').css("height",(2*r));
		$("#circlee").css('border-radius',r);
		$("#circlee").css('background-size',(4.2*r));
		$("#angular").css('top',(h+2*r+50));
  });    
});
