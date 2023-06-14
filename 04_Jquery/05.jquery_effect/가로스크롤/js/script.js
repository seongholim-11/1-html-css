
jQuery(document).ready(function(){



/* 마우스휠 가로스크롤 파이어폭스 */
$("body, html").on("mousewheel",function(e){

		var wheelDelta = e.originalEvent.wheelDelta;
		var detail=e.originalEvent.detail;
		var delta=e.originalEvent.detail*(-30);
		var firefoxdelta=delta+$(this).scrollLeft();

		if(wheelDelta > 0 || delta > 0){
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft() +120);
		}else{
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft() -120);
		}
});

$("body, html").on("DOMMouseScroll",function(e){

		var wheelDelta = e.originalEvent.wheelDelta;
		var detail=e.originalEvent.detail;
		var delta=e.originalEvent.detail*(-30);
		var firefoxdelta=delta+$(this).scrollLeft();

		if(delta > 0){
			$(this).scrollLeft(firefoxdelta-120);
		}else{
			$(this).scrollLeft(firefoxdelta+120);
		}
});



$("div.mn").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveLeft = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveLeft = $(this).next().offset().left;
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveLeft = $(this).prev().offset().left;
                        }
                    }
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollLeft: moveLeft + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
            });


	//메뉴 클릭시 그 영역으로 스르륵 가게하기
 	var btn=$('.menu>ul>li');
	var  sect=$('#wrap>div.mn');
	
	btn.click(function(){
		var btnth=$(this);
		var i=btnth.index();
		var sct=sect.eq(i);
		
		$('html, body').stop().animate({scrollLeft:sct.offset().left},800)
			
	});
	 
	 $(window).scroll(function(){
		sect.each(function(){
			var tg=$(this);
			var i=tg.index();
			var wt=$(window).scrollLeft();
						
			if(tg.offset().left <= wt){
				btn.removeClass('on');
				btn.eq(i-1).addClass('on');
			};
			
		});
	 });
	 
});

