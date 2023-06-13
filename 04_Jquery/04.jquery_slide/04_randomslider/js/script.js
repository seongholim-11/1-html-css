let sliderPanerImg = $('.slider-panel> img');
let imgWidth = sliderPanerImg.width();
let imgHeight = sliderPanerImg.height();

$('.slider-text').css('left', -400).each(function (index) {
    $(this).attr('data-index', index)

})

$('.control-button').each(function (index) {
    $(this).attr('data-index', index)
}).click(function () {
    let index = $(this).attr('data-index')
    moveSlider(index)
})

function moveSlider(index) {
    randomNum = index;
    let willMoveLeft = -(index % 3 * imgWidth)
    let willMoveTop = -(Math.floor(index / 3) * imgHeight)
    $('.slider-panel').animate({ left: willMoveLeft }, 500)
    $('.slider-panel').animate({ top: willMoveTop }, 500)
    $('.control-button[data-index=' + index + ']').addClass('active')
    $('.control-button[data-index!=' + index + ']').removeClass('active')

    $('.slider-text[data-index=' + index + ']').show().animate({ left: 50 }, 500)
    $('.slider-text[data-index!=' + index + ']').hide().animate({ left: -400 }, 500)
}

let randomNum = Math.round(Math.random() * 5)
console.log("🚀 ~ file: script.js:27 ~ randomNum:", randomNum)

moveSlider(randomNum)

let setIntervalId;

function timer() {
    setIntervalId = setInterval(function () {
        randomNum++
        if (randomNum == $('.control-button').length) {
            randomNum = 0;
        }
        $('.control-button').eq(randomNum).trigger('click')
    }, 3000)
}

timer()

$('.animation-canvas').hover(function () {
    clearInterval(setIntervalId)
}, function () {
    timer()
})

$('.left').click(function () {
    randomNum--
    if (randomNum < 0) {
        randomNum = $('.control-button').length - 1;
    }
    $('.control-button').eq(randomNum).stop().trigger('click')
})

$('.right').click(function () {
    randomNum++
    if (randomNum == $('.control-button').length) {
        randomNum = 0;
    }
    $('.control-button').eq(randomNum).stop().trigger('click')
})
