let tab = $('#tab>li')
let content = $('.content>div')

// 사진01~04를 누르면
tab.on('click', function (e) {
    e.preventDefault();
    // 누른 li
    let tg = $(this);
    // 누른 li>a
    let tc = tg.find('>a');
    // 누른 li의 인덱스
    let i = tg.index();

    // 모든 li>a에서 클래스 on 제거
    tab.find('>a').removeClass('on');
    // 누른 li>a에 클래스 on 추가
    tc.addClass('on');

    // 모든 사진 숨기기
    content.css('display', 'none');
    // 누른 li의 인덱스 번호와 같은 사진 보이기
    content.eq(i).css('display', 'block');
})
 
let el = $('.content>div>img')

// url 배열
let urls = [
    'https://www.naver.com/',
    'https://www.daum.net',
    'https://www.google.com',
    'https://www.nate.net'
]

// 이미지에 마우스를 올리면
el.on({mouseover: function(){
    // 누른 이미지
    let tg = $(this);
    // 누른 이미지에 클래스 on 추가
    tg.addClass('on')
// 이미지에 마우스를 내리면
}, mouseout: function(){
    // 누른 이미지
    let tg = $(this);
    // 누른 이미지에 클래스 on 삭제
    tg.removeClass('on')
// 이미지에 클릭하면
}, click: function(){
    // 누른 이미지
    let tg = $(this);
    // 누른 이미지의 부모(즉, div)의 인덱스 번호
    let i = tg.parent().index();
    // 누른 이미지의 부모(즉, div)의 인덱스 번호를 변수에 저장
    let linkUrl = urls[i];
    // 페이지 이동
    // location.href= linkUrl;
    // url 열기
    window.open(linkUrl)
}})