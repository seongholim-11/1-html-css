$(function(){
	var banner=$('.slideUl>li');
	var button=$('.buttonList>li');
	var leftBtn=$('.btnImg>.prev'); 
	var rightBtn=$('.btnImg>.next'); 
	var current=0;
	var setIntervalId;
	

	


	
	//progressBar.animate({속성:속성값},시간);
	
	


	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=banner.eq(current);
			var prevBtn=button.eq(current);
			move(prev,0,'-100%');
			prevBtn.removeClass('on');
			current++;
			if(current==banner.size()){current=0;}
			var next=banner.eq(current);
			var nextBtn=button.eq(current);
			move(next,'100%',0);
			nextBtn.addClass('on');
			
		},4000);
	}
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	var setIntervalLine;
	line();
	var progressWrap=$('.progress_bar');
	var progressBar=progressWrap.find('.bar');
	progressBar.animate({width: "100%" },2000);
	function line(){
		setIntervalLine=setInterval(function(){
			
			progressBar.css('width','0').animate({width: "100%" },2000);
		},4000);
	}
	
	$('.slide').on({mouseover:function(){
		clearInterval(setIntervalId);
		clearInterval(setIntervalLine);
	},mouseout:function(){
		timer();
		line();
	}
	});
	
	/* 양쪽 화살표 */
	rightBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'-100%');
		prevBtn.removeClass('on');
		current++;
		if(current==banner.size()){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'100%',0);
		nextBtn.addClass('on');
		
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
	});
	leftBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'100%');
		prevBtn.removeClass('on');
		current--;
		if(current==-banner.size()){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'-100%',0);
		nextBtn.addClass('on');
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
		});
	
	//button.on({click:function(){}});
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		
		button.removeClass('on');
		tg.addClass('on');
		if(current>i){
			move2(i);
		}else{
			move1(i);
		}
		
	});
	
	function move1(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'-100%'},500);
		nextEl.css('left','100%').stop().animate({left:0},500);
		current=i;
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
	}
	function move2(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'100%'},500);
		nextEl.css('left','-100%').stop().animate({left:0},500);
		current=i;
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
	}
	
	
});