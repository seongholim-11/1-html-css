jQuery(document).ready(function(){
		$('.section01').toggle(function(){				
			$('.section01').stop().animate({width:1160},500); 
			$(this).find('.first_visual').fadeOut().removeClass('bl');
			$(this).find('.click_visual').fadeIn().addClass('bl');
			$('.pr').css('display','block');
			$('.nx').css('display','block');
			$('.bt1').css('display','block');
		
		},function(){
			$('.section01').stop().animate({width:200},500);
			$(this).find('.first_visual').fadeIn().addClass('bl');
			$(this).find('.click_visual').fadeOut().removeClass('bl');
			$('.pr').css('display','none');
			$('.nx').css('display','none');
			$('.bt1').css('display','none');			
			
		});
		
		$('.section02').toggle(function(){		
			$('.visual').stop().animate({left:-240},500);
			$('.section02').stop().animate({width:1160},500); 
			$(this).find('.first_visual2').fadeOut().removeClass('bl');
			$(this).find('.click_visual2').fadeIn().addClass('bl');
			$('.pr1').css('display','block');
			$('.nx1').css('display','block');
			$('.bt2').css('display','block');
			
		},function(){
			$('.visual').stop().animate({left:0},500);
			$('.section02').stop().animate({width:200},500);
			$(this).find('.first_visual2').fadeIn().addClass('bl');
			$(this).find('.click_visual2').fadeOut().removeClass('bl');
			$('.pr1').css('display','none');
			$('.nx1').css('display','none');
			$('.bt2').css('display','none');			
		
		});
		
		$('.section03').toggle(function(){		
			$('.visual').stop().animate({left:-480},500);
			$('.section03').stop().animate({width:1160},500); 
			$(this).find('.first_visual3').fadeOut().removeClass('bl');
			$(this).find('.click_visual3').fadeIn().addClass('bl');
			$('.pr2').css('display','block');
			$('.nx2').css('display','block');
			$('.bt3').css('display','block');
		
		},function(){
			$('.visual').stop().animate({left:0},500);
			$('.section03').stop().animate({width:200},500);
			$(this).find('.first_visual3').fadeIn().addClass('bl');
			$(this).find('.click_visual3').fadeOut().removeClass('bl');
			$('.pr2').css('display','none');
			$('.nx2').css('display','none');
			$('.bt3').css('display','none');			
		
		});
		
		$('.section04').toggle(function(){		
			$('.visual').stop().animate({left:-720},500);
			$('.section04').stop().animate({width:1160},500);
			$(this).find('.first_visual4').fadeOut().removeClass('bl');
			$(this).find('.click_visual4').fadeIn().addClass('bl');
			$('.pr3').css('display','block');
			$('.nx3').css('display','block');
			$('.bt4').css('display','block');
		
		},function(){
			$('.section04').stop().animate({width:200},500);
			$('.visual').stop().animate({left:0},500);
			$(this).find('.first_visual4').fadeIn().addClass('bl');
			$(this).find('.click_visual4').fadeOut().removeClass('bl');
			$('.pr3').css('display','none');
			$('.nx3').css('display','none');
			$('.bt4').css('display','none');			
	
			
		});
		
		$('.section05').toggle(function(){		
			$('.visual').stop().animate({left:-960},500);
			$('.section05').stop().animate({width:1160},500); 
			$(this).find('.first_visual5').fadeOut().removeClass('bl');
			$(this).find('.click_visual5').fadeIn().addClass('bl');
			$('.pr4').css('display','block');
			$('.nx4').css('display','block');
			$('.bt5').css('display','block');
	
		},function(){
			$('.section05').stop().animate({width:200},500);
			$('.visual').stop().animate({left:0},500);
			$(this).find('.first_visual5').fadeIn().addClass('bl');
			$(this).find('.click_visual5').fadeOut().removeClass('bl');
			$('.pr4').css('display','none');
			$('.nx4').css('display','none');
			$('.bt5').css('display','none');			
	
		});
		
		
		
		var visual=$('ul.slide>li'); // 슬라이드 이미지
		var visual2=$('ul.slide2>li'); // 슬라이드 이미지
		var visual3=$('ul.slide3>li'); // 슬라이드 이미지
		var visual4=$('ul.slide4>li'); // 슬라이드 이미지
		var visual5=$('ul.slide5>li'); // 슬라이드 이미지
		var button1=$('ul.bt1>li'); 	 // 버튼
		var button2=$('ul.bt2>li'); 	 // 버튼
		var button3=$('ul.bt3>li'); 	 // 버튼
		var button4=$('ul.bt4>li'); 	 // 버튼
		var button5=$('ul.bt5>li'); 	 // 버튼
		var leftBtn=$('li.pr');
		var leftBtn2=$('li.pr1');
		var leftBtn3=$('li.pr2');
		var leftBtn4=$('li.pr3');
		var leftBtn5=$('li.pr4');
		var rightBtn=$('li.nx');
		var rightBtn2=$('li.nx1');
		var rightBtn3=$('li.nx2');
		var rightBtn4=$('li.nx3');
		var rightBtn5=$('li.nx4');
		var current1=0; // 현재 보이는 이미지
		var current2=0; //현재 보이는 이미지
		var current3=0; // 현재 보이는 이미지
		var current4=0; // 현재 보이는 이미지
		var current5=0; // 현재 보이는 이미지
		var setIntervalId1; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId2; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId3; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId4; // clearInterval을 쓰기 위해 변수명이 필요함
		var setIntervalId5; // clearInterval을 쓰기 위해 변수명이 필요함
	
	
		timer1();
		function timer1(){
			setIntervalId1=setInterval(function(){
				var prev=visual.eq(current1);
				var pn=button1.eq(current1);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current1++;
				
				if(current1 == visual.size()) current1=0;
				
				var next=visual.eq(current1);
				var pnn=button1.eq(current1); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer2();
		function timer2(){
			setIntervalId2=setInterval(function(){
				var prev=visual2.eq(current2);
				var pn=button2.eq(current2);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current2++;
				
				if(current2 == visual2.size()) current2=0;
				
				var next=visual2.eq(current2);
				var pnn=button2.eq(current2); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer3();
		function timer3(){
			setIntervalId3=setInterval(function(){
				var prev=visual3.eq(current3);
				var pn=button3.eq(current3);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current3++;
				
				if(current3 == visual3.size()) current3=0;
				
				var next=visual3.eq(current3);
				var pnn=button3.eq(current3); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer4();
		function timer4(){
			setIntervalId4=setInterval(function(){
				var prev=visual4.eq(current4);
				var pn=button4.eq(current4);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current4++;
				
				if(current4 == visual4.size()) current4=0;
				
				var next=visual4.eq(current4);
				var pnn=button4.eq(current4); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		timer5();
		function timer5(){
			setIntervalId5=setInterval(function(){
				var prev=visual5.eq(current5);
				var pn=button5.eq(current5);  
				move(prev, 0, '-100%');
				pn.removeClass('on'); 
			
				current5++;
				
				if(current5 == visual5.size()) current5=0;
				
				var next=visual5.eq(current5);
				var pnn=button5.eq(current5); 
				move(next, '100%',0);
				pnn.addClass('on');
	
			}, 3000);
		};
		
		function move(tg, start, end){
			tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
		}   
		
		
	//버튼을 클릭 했을 때
	button1.click(function(){
		var tg=$(this);
		var i=tg.index(); 
		
		button1.removeClass('on'); 
		tg.addClass('on');
		
		move1(i); 
		});
	
	
	
	button2.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button2.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		move2(i); 
		}
	});
	
	button3.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button3.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		move3(i); 
		}
	});
	
	button4.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button4.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		move4(i); 
		}
	});
	
	button5.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button5.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		move5(i); 
		}
	});
	
	function move1(i){
		if(current1 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual.eq(current1);
		var nextEl=visual.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current1=i;
	}
	
	function move2(i){
		if(current2 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual2.eq(current2);
		var nextEl=visual2.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current2=i;
	}
	
	function move3(i){
		if(current3 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual3.eq(current3);
		var nextEl=visual3.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current3=i;
	}
	
	function move4(i){
		if(current4 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual4.eq(current4);
		var nextEl=visual4.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current4=i;
	}
	
	function move5(i){
		if(current5 == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual5.eq(current5);
		var nextEl=visual5.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current5=i;
	}	 
		
	//호버시 멈추게 하는 기능
	 $('.click_visual, li.pr, li.nx, ul.bt1').on({
		mouseover:function(){
			clearInterval(setIntervalId1);
		}, mouseout:function(){
			timer1();
		}
	});
	
	$('.click_visual2, li.pr1, li.nx1, ul.bt2').on({
		mouseover:function(){
			clearInterval(setIntervalId2);
		}, mouseout:function(){
			timer2();
		}
	});
	
	$('.click_visual3, li.pr2, li.nx2, ul.bt3').on({
		mouseover:function(){
			clearInterval(setIntervalId3);
		}, mouseout:function(){
			timer3();
		}
	});
	
	$('.click_visual4, li.pr3, li.nx3, ul.bt4').on({
		mouseover:function(){
			clearInterval(setIntervalId4);
		}, mouseout:function(){
			timer4();
		}
	});
	
	$('.click_visual5, li.pr4, li.nx4, ul.bt5').on({
		mouseover:function(){
			clearInterval(setIntervalId5);
		}, mouseout:function(){
			timer5();
		}
	});
 
	/* 화살표클릭 */
	 rightBtn.click(function(){
			var prev=visual.eq(current1);
			var pn=button1.eq(current1);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current1++;

        	if(current1 == visual.size()) current1=0;

        	var next=visual.eq(current1);
			var pnn=button1.eq(current1);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
		
	rightBtn2.click(function(){
			var prev=visual2.eq(current2);
			var pn=button2.eq(current2);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current2++;

        	if(current2 == visual2.size()) current2=0;

        	var next=visual2.eq(current2);
			var pnn=button2.eq(current2);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	rightBtn3.click(function(){
			var prev=visual3.eq(current3);
			var pn=button3.eq(current3);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current3++;

        	if(current3 == visual3.size()) current3=0;

        	var next=visual3.eq(current3);
			var pnn=button3.eq(current3);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	rightBtn4.click(function(){
			var prev=visual4.eq(current4);
			var pn=button4.eq(current4);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current4++;

        	if(current4 == visual4.size()) current4=0;

        	var next=visual4.eq(current4);
			var pnn=button4.eq(current4);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	rightBtn5.click(function(){
			var prev=visual5.eq(current5);
			var pn=button5.eq(current5);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current5++;

        	if(current5 == visual5.size()) current5=0;

        	var next=visual5.eq(current5);
			var pnn=button5.eq(current5);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	leftBtn.click(function(){
			var prev=visual.eq(current1);
			var pn=button1.eq(current1);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current1--;
			

        	if(current1 == -visual.size()) current1=0;

        	var next=visual.eq(current1);
			var pnn=button1.eq(current1);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});	
		
	leftBtn2.click(function(){
			var prev=visual2.eq(current2);
			var pn=button2.eq(current2);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current2--;
			

        	if(current2 == -visual2.size()) current2=0;

        	var next=visual2.eq(current2);
			var pnn=button2.eq(current2);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});
	
	leftBtn3.click(function(){
			var prev=visual3.eq(current3);
			var pn=button3.eq(current3);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current3--;
			

        	if(current3 == -visual3.size()) current3=0;

        	var next=visual3.eq(current3);
			var pnn=button3.eq(current3);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});
	
	leftBtn4.click(function(){
			var prev=visual4.eq(current4);
			var pn=button4.eq(current4);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current4--;
			

        	if(current4 == -visual4.size()) current4=0;

        	var next=visual4.eq(current4);
			var pnn=button4.eq(current4);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});
	
	leftBtn5.click(function(){
			var prev=visual5.eq(current5);
			var pn=button5.eq(current5);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current5--;
			

        	if(current5 == -visual5.size()) current5=0;

        	var next=visual5.eq(current5);
			var pnn=button5.eq(current5);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});	 
		
});