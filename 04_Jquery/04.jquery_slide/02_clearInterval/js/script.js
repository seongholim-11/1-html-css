$('.slideshow').each(function(){
    // 각각의 slideshow
    let container = $(this);
    let timer;

    function switchImg(){

        // slideshow > a
        let anchors = container.find('a');

/*         anchors.each(function(){
            anchors.css('display', 'none')
        }) */
        
        // 첫번째 이미지
        let first = anchors.eq(0);
        // 두번째 이미지
        let second = anchors.eq(1);

        
        
        // container 안에(뒤쪽에) first 넣기
        // 첫번째 이미지가 뒤로 가면서 두번째 이미지가 첫번째 이미지가 됨.
        first.fadeOut().appendTo(container);
        // 두번째 이미지 보이기
        // 두번째 이후의 이미지들은 계속 display: none 상태
        // ex)
        // 2(block) => 다시 2번이 1번이 됨(let first = anchors.eq(0);)
        // 3(none) => 다시 3번이 2번이 됨(let first = anchors.eq(1);)
        // 4(none)
        // 1(none)
        second.fadeIn();
    }

    function startTimer(){
        // clearInterval을 쓰기 위해 변수에 담기
        timer = setInterval(switchImg, 3000)
    }

    function stopTimer(){
        clearInterval(timer)
    }

    container.find('a').hover(stopTimer, startTimer)
    startTimer()
})