//header.js
jQuery(function(){
	var winH = $(window).innerHeight();

	//header 스크롤 addClass
	$(window).scroll(function(){
		if( $(window).scrollTop() >= 46 ){
			$('#header').addClass('addFixed');
		}
		else{
			$('#header').removeClass('addFixed');
		}
	})
	
	
	
	//헤더 돋보기 클릭시 서치박스 오픈
	$('.searchBt').on({
		click:	function(){
			$('.header-search-box').show();
		}
	});
	
	//헤더 닫기버튼 클릭시 서치박스 닫기
	$('.searchCloseBt').on({
		click:	function(){
			$('.header-search-box').hide();
		}
	});
	
	
	
});