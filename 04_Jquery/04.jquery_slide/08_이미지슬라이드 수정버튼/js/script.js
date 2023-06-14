// 1. eq()가 음수이면, 뒤에서 n번째 요소





const banner = $('.slideUl li');
const prev = $('.btnImg>.prev');
const next = $('.btnImg>.next');
const button = $('.buttonList li');

let cnt = 0;
let setIntervalId;

// timer();
function timer() {
    setIntervalId = setInterval(function () {
        let prev = banner.eq(cnt);
        let prevBtn = button.eq(cnt);
        move(prev, 0, '-100%')
        prevBtn.removeClass('on');
        cnt++;
        if (cnt == banner.size()) {
            cnt = 0;
        }

        let next = banner.eq(cnt);
        let nextBtn = button.eq(cnt);
        move(next, '100%', 0)
        nextBtn.addClass('on');
    }, 2000)
}



$('.slide').on({
    mouseover: function () {
        clearInterval(setIntervalId);
    }, mouseout: function () {
        // timer();
    }
})

next.click(function () {
    let prev = banner.eq(cnt);
    let prevBtn = button.eq(cnt);
    move(prev, 0, '-100%')
    prevBtn.removeClass('on');
    cnt++;
    if (cnt == banner.size()) {
        cnt = 0;
    }

    let next = banner.eq(cnt);
    let nextBtn = button.eq(cnt);
    move(next, '100%', 0)
    nextBtn.addClass('on');
})

prev.click(function () {
    let prev = banner.eq(cnt);
    let prevBtn = button.eq(cnt);
    move(prev, 0, '100%')
    prevBtn.removeClass('on');
    cnt--;
    if (cnt == -1) {
        cnt = 2;
    }

    let next = banner.eq(cnt);
    let nextBtn = button.eq(cnt);
    move(next, '-100%', 0)
    nextBtn.addClass('on');
})

function move(tg, start, end) {
    tg.css('left', start).stop().animate({ left: end }, 500)
}

button.click(function () {
    let tg = $(this);
    let i = tg.index();

    button.removeClass('on');
    tg.addClass('on')

    // cnt가 현재 보이는 것
    // i가 앞으로 보일 것
    if (cnt > i) {
        if (cnt == i) return;
        let cntEl = banner.eq(cnt);
        let nextEl = banner.eq(i);
        cntEl.css('left', 0).stop().animate({ left: '100%' }, 500);
        nextEl.css('left', '-100%').stop().animate({ left: 0 }, 500);
        cnt = i;
    } else {
        if (cnt == i) return;
        let cntEl = banner.eq(cnt);
        let nextEl = banner.eq(i);
        cntEl.css('left', 0).stop().animate({ left: '-100%' }, 500);
        nextEl.css('left', '100%').stop().animate({ left: 0 }, 500);
        cnt = i;
    }
})
