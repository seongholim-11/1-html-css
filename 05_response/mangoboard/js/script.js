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
const slideBanner = $('#banner .banner-area .area');
const slideList = $('#banner .banner-area .area li');
const prevBtn = $('.banner-left-btn')
const nextBtn = $('.banner-right-btn')

let slideWidth = slideList.width();
let setIntervalId;
// console.log("🚀 ~ file: script.js:63 ~ slideWidth:", slideWidth)
function bannerSlide(){

}

function rightBtn(){

}

function leftBtn(){

}