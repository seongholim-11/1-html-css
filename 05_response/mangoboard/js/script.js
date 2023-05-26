const appBtn = $('.app-btn');

appBtn.on({click:function(){
    $('.bar').toggleClass('add-app-btn');
    $('.mobile-nav').slideToggle(500)
}})

//news
const newsBannerWrap = $('.news-wraps');
const newsBanner = $('.news-wraps .news-wrap');
let current = 0;
let newsInterval;

function newsSlide(){
    newsInterval = setInterval(function(){
        let prev = newsBanner.eq(current);
        newsMovie(prev, 0, '-100%');
        current++;
        if(current==newsBanner.size()){
            current = 0;
        }
        let next = newsBanner.eq(current);
        newsMovie(next, '100%', 0)
    }, 2000)   
}

function newsMovie(tg, start, end){
    tg.css('top', start).stop().animate({top: end}, 500);
}

newsBannerWrap.hover(function(){
    clearInterval(newsInterval);
},function(){
    newsSlide()
})

/* document.querySelector('.news-wraps').addEventListener('mouseover', () => {
	clearInterval(newsInterval);
});
document.querySelector('.news-wraps').addEventListener('mouseout', () => {
	newsSlide()
}); */

newsSlide()

//button
let buttonRadius= $('.btn li');
let line = $('.template-line-wrap .title li')

buttonRadius.click(function(){
    buttonRadius.removeClass('on');
    $(this).addClass('on');
    let lines = $(this).index()
    line.removeClass('on');
    line.eq(lines).addClass('on');
})

// 슬라이드

//변수 초기화
const slideBanner = $('#banner .banner-area .area');
const slideList = $('#banner .banner-area .area li');
const prevBtn = $('.banner-left-btn')
const nextBtn = $('.banner-right-btn')

// li의 너비를 변수에 저장
let slideWidth = slideList.width();
// setInterval() 함수를 저장하는 변수 선언
let setIntervalId;

// bannerSlide() 함수 실행, 함수 호이스팅
bannerSlide()

// bannerSlide() 함수 만들기
function bannerSlide(){
    // setInterval() 함수 사용방법
    // setInterval(function or code, [delay])
    setIntervalId = setInterval(()=>{
        // stop() 이 호출되면 현재 동작하고 있는 애니메이션은 즉시 동작이 중단된다.
        // stop()은 버튼을 여러 번 눌렀을 때, 의도치 않은 움직임을 방지하기 위해 사용

        // animate() 함수 사용방법
        // animate({CSS속성정의},시간,콜백함수);
        // CSS속성정의: {left: -(slideWidth+15)}
        // 시간: 500(0.5초)
        /* 콜백함수: function(){
            $('#banner .banner-area .area li:first').insertAfter('#banner .banner-area .area li:last');
            slideBanner.css({left:0})} */
        //콜백함수(Callback Function)란 A함수의 파라미터로 B함수를 전달받아, A함수의 내부에서 실행하는 B함수로 A함수가 끝나고 실행된다.
        // 여기선. animate()의 파라미터로 익명 function 함수를 전달받아 animate()가 끝난 뒤, function 실행

        // 여기서 함수를 꼭 콜백함수로 불러야하는 이유
        // 1. 자바스크립트는 기본적으로 비동기 처리 방식이기 때문에 현재 실행중인 코드가 완료되지 않아도, 다음 코드로 넘어감.
        /* 2. slideBanner.stop().animate({left: -(slideWidth+15)},500)
              slide()
              function slide(){
                 $('#banner .banner-area .area li:first').insertAfter('#banner .banner-area .area li:last');
                 slideBanner.css({left:0})

               만약 이렇게 실행하면 animate() 함수가 끝나기 전에 slide()가 실행되기 때문에
               애니메이션이 나오지 않음.
        })*/
        slideBanner.stop().animate({left: -(slideWidth+15)},500,
        function(){
            $('#banner .banner-area .area li:first').insertAfter('#banner .banner-area .area li:last');
            slideBanner.css({left:0})
        })
    }, 2000)
}

// 왼쪽 버튼, 오른쪽 버튼, 배너에 마우스를 올리거나 포커스하면 정지
$('.banner-left-btn, .banner-right-btn, .banner-area').on('mouseover focus', function(){
    clearInterval(setIntervalId)
})

// 왼쪽 버튼, 오른쪽 버튼, 배너 밖에 마우스를 두고 포커스하지 않으면 배너 자동 실행
$('.banner-left-btn, .banner-right-btn, .banner-area').on('mouseout leave', function(){
    bannerSlide()
})

// 오른쪽 버튼을 누르면
// ul 전체를 li길이+마진값(235px)만큼 왼쪽으로 0.5초 동안 이동 #애니메이션처럼 보임
// 그리고 첫번째 li를 마지막 li 뒤로 보내 슬라이드되어도 li가 계속 이어지게 함.
// li길이+마진값만큼 이동된 왼쪽의 공간은 빈칸이 되고 다시 ul을 left: 0으로 보낸다. #결과만 보임
function rightBtn(){
    slideBanner.animate({
        left: -(slideWidth+15)
    },500, 
    function(){
        $('#banner .banner-area .area li:first').insertAfter('#banner .banner-area .area li:last');
        slideBanner.css({left:0})
    })
}


// 왼쪽 버튼을 누르면
// 마지막 li를 첫번째 li 전으로 보낸다. #애니메이션을 위한 li를 미리 보냄
// 그리고 css({left: -(slideWidth+15)})하여 ul 전체를 왼쪽으로 옮기고 #결과만 보임
// animate({left:0},500)을 통해 왼쪽에서 나오는 것처럼 애니메이션을 준다. #애니메이션처럼 보임
function leftBtn(){
    $('#banner .banner-area .area li:last').insertBefore('#banner .banner-area .area li:first');
    slideBanner.css({left: -(slideWidth+15)}).stop().animate({left:0},500)
}

nextBtn.click(function(){
    rightBtn();
})

prevBtn.click(function(){
    leftBtn();
})

//bxslide
$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: false
    });
  });