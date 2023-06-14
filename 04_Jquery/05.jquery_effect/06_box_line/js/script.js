const animate = $('.animate')
const topLine = $('.top-line')
const bottomLine = $('.bottom-line')
const leftLine = $('.left-line')
const rightLine = $('.right-line')

// 무한반복
/* setInterval(function(){
    topLine.css('left', '-100%').animate({left: '0'})
    bottomLine.css('left', '100%').animate({left: '0'})
    leftLine.css('top', '100%').animate({top: '0'})
    rightLine.css('top', '-100%').animate({top: '0'})
},1500) */

// 각각의 animate에 마우스 올리면
animate.each(function () {
    let tg = $(this)
    tg.hover(function () {
        tg.find('.top-line').css('left', '-100%').animate({ left: '0' })
        tg.find('.bottom-line').css('left', '100%').animate({ left: '0' })
        tg.find('.left-line').css('top', '100%').animate({ top: '0' })
        tg.find('.right-line').css('top', '-100%').animate({ top: '0' })
    }, function () {
        tg.find('.top-line').animate({ left: '-100%' })
        tg.find('.bottom-line').animate({ left: '100%' })
        tg.find('.left-line').animate({ top: '100%' })
        tg.find('.right-line').animate({ top: '-100%' })
    })
})