let cnt = 0;
let n = jQuery('.slide').length - 1;
let delta = 0; // 휠 델타값
let t = 0; // 마우스 휠 토글 변수
let z = 0; // cnt를 기준으로 이전 다음
let setintervalID;

$('.arrowNextBt').on('click', function(){
    nextCountfn()
})

$('.arrowPrevBt').on('click', function(){
    prevCountfn()
})

// 자동슬라이드
autoplay();
function autoplay(){
    setintervalID = setInterval(nextCountfn,3000)
}

// 일시정지
$('#section1').hover(function(){
    clearInterval(setintervalID);
    mouseWheelEventFn()
}, function(){
    autoplay();
})

$('.slide-wrap').swipe({
    swipeLeft: function(){
        nextCountfn()
    },
    swipeRight: function(){
        prevCountfn()
    }
})

// 마우스 휠 이벤트 함수
function mouseWheelEventFn(){
    $('#section1').on('mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        if(e.originalEvent.detail){ // 파이어폭스
            delta = -e.originalEvent.detail * 40
        }else if(e.originalEvent.wheelDelta){ // 파이어폭스 제외
            delta = e.originalEvent.wheelDelta
        }

        if(t==0){
            t = 1;
            if(delta < 0){
                nextCountfn()
            }else{
                prevCountfn()
            }
            setTimeout(function(){
                t = 0
            }, 100)
        }
    })
}

// 다음으로 이동
function nextCountfn() {
    cnt++;
    if (cnt > n) { cnt = 0; }
    z = (cnt == 0 ? n : cnt - 1)
    console.log("🚀 ~ file: script.js:19 ~ nextCountfn ~ z:", z)
    mainNextSlidefn();
}

// 이전으로 이동
function prevCountfn() {
    cnt--;
    if (cnt < 0) { cnt = n; }
    z = (cnt == n ? 0 : cnt + 1)
    mainPrevSlidefn();
}

// 페이지 네이션
function pageBtfn(){
    $('.pageBt').removeClass('addpageBt');
    $('.pageBt').eq(cnt).addClass('addpageBt');
}

$('.pageBt').each(function(index){
    $(this).on('click', function(){
        if(cnt < index){
            z = cnt
            cnt = index
            mainNextSlidefn()
        }else if(cnt > index){
            z = cnt
            cnt = index
            mainPrevSlidefn()
        }
    })
})

// 메인 슬라이드 다음슬라이드 함수
function mainNextSlidefn() {
    pageBtfn()
    // li에 animate가 없으면
    if (!($('.slide li').is(':animated'))) {
        // 모든 .slide(li)의 z-index를 1로 변경하고, 그 아래 li(4개)들의 너비를 25%로 만듦
        $('.slide').css({ zIndex: 1 }).find('li').animate({ width: (25 * 1) + '%' }, 0)

        $('.slide').eq(z).css({ zIndex: 2 }).find('li').animate({ width: (25 * 1) + '%' }, 0)
        $('.slide').eq(cnt).css({ zIndex: 3 }).find('li').animate({ width: (25 * 0) + '%' }, 0).animate({ width: (25 * 1) + '%' }, 800)
    } else {
        return false
    }
}

// 메인 슬라이드 이전슬라이드 함수
function mainPrevSlidefn() {
    pageBtfn()
    if (!($('.slide li').is(':animated'))) {
        $('.slide').css({ zIndex: 1 }).find('li').animate({ width: (25 * 1) + '%' }, 0)
        $('.slide').eq(z).css({ zIndex: 3 }).find('li').animate({ width: (25 * 1) + '%' }, 0).animate({ width: (25 * 0) + '%' }, 800)
        $('.slide').eq(cnt).css({ zIndex: 2 }).find('li').animate({ width: (25 * 1) + '%' }, 0)
    } else {
        return false
    }
}

