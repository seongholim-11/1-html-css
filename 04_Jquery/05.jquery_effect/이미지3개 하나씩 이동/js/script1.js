$(function(){
	var current=0;
	var thumbListSize=1;
	var thumbnail=$('#thumbnail');
	var prev=thumbnail.find('>.left');
	var next=thumbnail.find('>.right');
	var container=thumbnail.find('>.container>ul');
	var containWidth=thumbnail.width();
	var thumb=container.find('>.thumb');
	var maxSize=thumb.size();
	
	function listMove(){
		var tl=(containWidth+1)* current*-1;
		container.stop().animate({left:tl},{duration:400, easing:'easeOutCubic'});
	}
	next.click(function(){
		if(current<(maxSize/thumbListSize)/3-1) current ++;	
		listMove();
	});
	prev.click(function(){
		if(current>0)
			current--;
		listMove();
	});
	
	
});









