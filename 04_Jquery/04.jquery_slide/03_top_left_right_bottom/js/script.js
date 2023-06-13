let current1 = 0;
let current2 = 0;
let current3 = 0;
let current4 = 0;
let banner1 = $('#wrap ul.num1>li')
let banner2 = $('#wrap ul.num2>li')
let banner3 = $('#wrap ul.num3>li')
let banner4 = $('#wrap ul.num4>li')
let moveInterval1;
let moveInterval2;
let moveInterval3;
let moveInterval4;

banner_01()
banner_02()
banner_03()
banner_04()

function banner_01() {
    moveFunction1()
    function moveFunction1() {
        moveInterval1 = setInterval(function () {
            let prev = banner1.eq(current1);
            move(prev, 0, '-100%')
            current1++;
            if (current1 == banner1.length) {
                current1 = 0;
            }
            let next = banner1.eq(current1);
            move(next, '100%', '0')
        }, 2000)
    }

    function move(tg, start, end) {
        tg.css('top', start).stop().animate({ top: end }, 500)
    }

    banner1.hover(function () {
        clearInterval(moveInterval1)
    }, function () {
        moveFunction1()
    })
}
function banner_02() {
    moveFunction2()
    function moveFunction2() {
        moveInterval2 = setInterval(function () {
            let prev = banner2.eq(current2);
            move(prev, 0, '-100%')
            current2++;
            if (current2 == banner2.length) {
                current2 = 0;
            }
            let next = banner2.eq(current2);
            move(next, '100%', '0')
        }, 2000)
    }

    function move(tg, start, end) {
        tg.css('bottom', start).stop().animate({ bottom: end }, 500)
    }

    banner2.hover(function () {
        clearInterval(moveInterval2)
    }, function () {
        moveFunction2()
    })
}
function banner_03() {
    moveFunction3()
    function moveFunction3() {
        moveInterval3 = setInterval(function () {
            let prev = banner3.eq(current3);
            move(prev, 0, '-100%')
            current3++;
            if (current3 == banner3.length) {
                current3 = 0;
            }
            let next = banner3.eq(current3);
            move(next, '100%', '0')
        }, 2000)
    }

    function move(tg, start, end) {
        tg.css('right', start).stop().animate({ right: end }, 500)
    }

    banner3.hover(function () {
        clearInterval(moveInterval3)
    }, function () {
        moveFunction3()
    })
}
function banner_04() {
    moveFunction4()
    function moveFunction4() {
        moveInterval4 = setInterval(function () {
            let prev = banner4.eq(current4);
            move(prev, 0, '-100%')
            current4++;
            if (current4 == banner4.length) {
                current4 = 0;
            }
            let next = banner4.eq(current4);
            move(next, '100%', '0')
        }, 2000)
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500)
    }

    banner4.hover(function () {
        clearInterval(moveInterval4)
    }, function () {
        moveFunction4()
    })
}