const appBtn = $('.app-btn');

appBtn.on({
    click: function () {
        $('.bar').toggleClass('add-app-btn');
        $('.mobile-nav').slideToggle(500)
    }
})

//news
const newsBannerWrap = $('.news-wraps');
const newsBanner = $('.news-wraps .news-wrap');
let current = 0;
let newsInterval;

function newsSlide() {
    newsInterval = setInterval(function () {
        let prev = newsBanner.eq(current);
        newsMovie(prev, 0, '-100%');
        current++;
        if (current == newsBanner.size()) {
            current = 0;
        }
        let next = newsBanner.eq(current);
        newsMovie(next, '100%', 0)
    }, 2000)
}

function newsMovie(tg, start, end) {
    tg.css('top', start).stop().animate({ top: end }, 500);
}

newsBannerWrap.hover(function () {
    clearInterval(newsInterval);
}, function () {
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
let buttonRadius = $('.btn li');
let line = $('.template-line-wrap .title li')

buttonRadius.click(function () {
    buttonRadius.removeClass('on');
    $(this).addClass('on');
    let lines = $(this).index()
    line.removeClass('on');
    line.eq(lines).addClass('on');
})

// 슬라이드
const slideUl = $('.area');
const slideLi = $('.area li');
const prevBtn = $('.banner-left-btn');
const nextBtn = $('.banner-right-btn');

let liWidth = slideLi.width();
let setIntervalId;

bannerSlide()

function bannerSlide() {
    setIntervalId = setInterval(function () {
        slideUl.stop().animate({ left: -(liWidth + 15) }, 500,
            function () {
                $('.area li:first').insertAfter('.area li:last')
                slideUl.css({ left: 0 })
            })
    }, 2000)
}

$('.banner-left-btn, .banner-right-btn, .area li').on('mouseover focus', function(){
    clearInterval(setIntervalId);
});

$('.banner-left-btn, .banner-right-btn, .area li').on('mouseout leave', function(){
    bannerSlide()
});


prevBtn.click(function () {
    $('.area li:last').insertBefore('.area li:first')
    slideUl.css({left: -(liWidth + 15)}).animate({left:0}, 500)

})

nextBtn.click(function () {
    slideUl.stop().animate({ left: -(liWidth + 15) }, 500,
    function () {
        $('.area li:first').insertAfter('.area li:last')
        slideUl.css({ left: 0 })
    })
})