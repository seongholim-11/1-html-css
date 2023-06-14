$(function(){
	$('.hover_opa div').css("opacity","0");
	$('.banner').hover(function(){
		var th=$(this);
		var thHv1=th.find('.hover_x1');
		var thHv2=th.find('.hover_x2');
		var thHv3=th.find('.hover_y1');
		var thHv4=th.find('.hover_y2');
		
		thHv1.css('opacity','0.2').stop().animate({height:"0%"},500);
		thHv2.css('opacity','0.2').stop().animate({height:"0%"},500);
		thHv3.css('opacity','0.2').stop().animate({width:"0%"},500);
		thHv4.css('opacity','0.2').stop().animate({width:"0%"},500);
		
	},function(){
		var th=$(this);
		var thHv1=th.find('.hover_x1');
		var thHv2=th.find('.hover_x2');
		var thHv3=th.find('.hover_y1');
		var thHv4=th.find('.hover_y2');
		
		thHv1.stop().animate({height:'50%', opacity:0},500);
		thHv2.stop().animate({height:'50%', opacity:0},500);
		thHv3.stop().animate({width:'50%', opacity:0},500);
		thHv4.stop().animate({width:'50%', opacity:0},500);
	});
});