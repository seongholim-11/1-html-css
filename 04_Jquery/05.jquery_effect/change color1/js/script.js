jQuery(document).ready(function(){
	
	

			
	$('.color_choice li').each(function(){
		var color=$(this).find('input').val();
		$(this).css({background:color});
	});
	
	
	$('html, body').on('mousemove',function(){
		$('.color_choice li').each(function(){
			var color=$(this).find('input').val();
			$(this).css({background:color});		
		});

	});
	
	var totalH=$(window).height();
	var totalW=$(window).width();
	$('#content_box').css({height:totalH/1.2, width:totalW/2});
	$('.color_choice').css({height:totalH, width:totalW/40});

	
	$(window).on('resize',function(){
		var resizeH=$(window).height();
		var resizeW=$(window).width();
		$('#content_box').css({height:resizeH/1.2, width:resizeW/2});
		$('.color_choice').css({height:resizeH, width:resizeW/40});
	});
	
	$('.draggable').draggable({
		cursor:'move',
		stack:'.draggable'
	});

	$('.draggable').on('dragstop',function(){
		var left=$(this).offset().left;
		var top=$(this).offset().top;	
		var color2=$(this).find('input').val();
		var contentH=$('.content1').height();
		var contentW=$('.content1').width();
		var content2H=$('.content2').height();
		var content2W=$('.content2').width();
		/*각각 컨텐츠의 오프셋 탑 래프트 값*/
		var content1T=$('.content1').offset().top;
		var content1L=$('.content1').offset().left;
		var content2T=$('.content2').offset().top;
		var content2L=$('.content2').offset().left;
		var content3T=$('.content3').offset().top;
		var content3L=$('.content3').offset().left;
		
		
		/*컨텐츠 top 부터 컨텐츠 top +height 값 컨텐츠left 부터 컨텐츠 left+ width 값 */
		/*만약에 드래그한 li 가 컨텐츠 안에 있으면 이라는 뜻*/
		if (content1T<top && content1T+contentH>top && content1L<left && content1L+contentW>left){ 
	
		
		/*컨텐츠가 top 에서 떨어진 만큼 -값 해주기 left도 마찬가지 width height %는 본인 취향대로*/
		$('.change_1').css({background:color2 ,top:top-content1T, left:left-content1L}).stop().animate({ width:'200%', height:'450%',marginTop:'-100%' ,marginLeft:"-100%"},500,function(){
			$('.content1').css({background:color2});
			$('.change_1').css({background:'none' ,top:0, left:0, width:0, height:0,marginTop:0 , marginLeft:0})
		});
		
		/*움직인 li 원래 위치로 보내기*/
		$(this).stop().animate({top:top-top, left:left-left});
		
		}; 
		
		if (content2T<top && content2T+content2H>top && content2L<left && content2L+content2W>left){ 
		
		
		$('.change_2').css({background:color2 ,top:top-content2T, left:left-content2W}).animate({ width:'200%', height:'300%',marginTop:'-100%' , marginLeft:'-100%'},500,function(){
			$('.content2').css({background:color2});
			$('.change_2').css({background:'none' ,top:0, left:0, width:0, height:0,marginTop:0 , marginLeft:0})
		});
		$(this).stop().animate({top:top-top, left:left-left});
		
		}; 
		
		if (content3T<top && content3T+content2H>top && content3L<left && content3L+content3L>left){ 
		
		
		$('.change_3').css({background:color2 ,top:top-content3T, left:left-content3L}).animate({ width:'200%', height:'300%',marginTop:'-100%' , marginLeft:'-100%'},500,function(){
			$('.content3').css({background:color2});
			$('.change_3').css({background:'none' ,top:0, left:0, width:0, height:0,marginTop:0 , marginLeft:0})
		});
		$(this).stop().animate({top:top-top, left:left-left});
		
		}; 
		$(this).stop().animate({top:top-top, left:left-left});
	})
			
});