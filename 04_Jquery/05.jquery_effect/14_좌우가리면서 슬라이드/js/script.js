const page = $('.view');
const prev = $('.prev');
const next = $('.next');
const btns = $('.page-bt a');

let current = 0;
let timer;

timer = setInterval(event, 3000);

function event() {
    if (current == 3) { current = 0; };
    let next = current + 1;
    if (current == 2) { next = 0 };
    page.eq(current).css('z-index', 0).removeClass('right')
    page.eq(current).children('img').removeClass('right')
    page.eq(current).stop().animate({ width: '0%' }, 1500)

    page.eq(next).css('z-index', 1).addClass('right')
    page.eq(next).children('img').addClass('right')
    page.eq(next).stop().animate({ width: '100%' }, 1500)

    current++;

    btns.removeClass('on');
    btns.eq(next).addClass('on');
}

$('.view, .prev, .next, .page-bt').hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(event, 3000);
})

next.click(event)

prev.click(function () {
    if (current == -1) { current = 2; };
    let prev = current - 1;
    if (current == 0) { prev = 2 };
    page.eq(current).css({ 'z-index': 0, width: '100%' }).addClass('right')
    page.eq(current).children('img').addClass('right')
    page.eq(current).stop().animate({ width: '0%' }, 1500)
    page.eq(prev).css({ 'z-index': 1, width: '0%' }).removeClass('right')
    page.eq(prev).children('img').removeClass('left')
    page.eq(prev).stop().animate({ width: '100%' }, 1500)

    current--;

    btns.removeClass('on');
    btns.eq(prev).addClass('on');
})

btns.click(function () {
    let target = $(this).index();
    current = $(".page-bt a.on").index();

    if (target > current) {
        page.eq(current).css('z-index', 0).removeClass('right')
        page.eq(current).children('img').removeClass('right')
        page.eq(current).stop().animate({ width: '0%' }, 1500)

        page.eq(target).css('z-index', 1).addClass('right')
        page.eq(target).children('img').addClass('right')
        page.eq(target).stop().animate({ width: '100%' }, 1500)

        current++;

        btns.removeClass('on');
        btns.eq(target).addClass('on');
    } else if (target < current) {
        page.eq(current).css({ 'z-index': 0, width: '100%' }).addClass('right')
        page.eq(current).children('img').addClass('right')
        page.eq(current).stop().animate({ width: '0%' }, 1500)
        page.eq(target).css({ 'z-index': 1, width: '0%' }).removeClass('right')
        page.eq(target).children('img').removeClass('left')
        page.eq(target).stop().animate({ width: '100%' }, 1500)

        current--;

        btns.removeClass('on');
        btns.eq(target).addClass('on');
    }
})
