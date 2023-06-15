// 휠이벤트 발생시 반환값 확인하기 위한 변수
let wheelDelta = 0;
let browser = 0;

// 1. 섹션 8개 배열
// 2. 마우스휠을 아래로(-120) 다음 섹션으로 스크롤이벤트 발생
// 3. 마우스휠을 위로(+120) 이전 섹션으로 스크롤이벤트 발생
// 4. browser[Event-mousewheel]: 크롬, 익스, 사파리, 오페라 등등
// 5. browser[Event-DOMMouseScroll]: 파이어폭스
// 6. 파이어 폭스 마우스휠을 아래로(-3) 위로(+3)
// 7. 파이어 폭스 브라우저 판별 == window.navigator.userAgent

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        browser = window.navigator.userAgent.toLowerCase().indexOf('firefox');
        if(browser >= 0){
            wheelDelta = -(e.detail*40);
        }else{
            wheelDelta = e.originalEvent.wheelDelta;
        }

        if(wheelDelta < 0){
            if(index < $('.section').length - 1){
                $('html, body').stop().animate({scrollLeft: $(this).next().offset().left}, 500)
            }
        }else{
            if(index > 0 ){
                $('html, body').stop().animate({scrollLeft: $(this).prev().offset().left}, 500)
            }
        }
    })
})