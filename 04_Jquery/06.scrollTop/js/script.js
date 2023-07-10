$(window).scroll(()=>{
    let sct = $(window).scrollTop();
    let section2 = $('.section2').offset().top;
    let section3 = $('.section3').offset().top;
    
    if(sct > section2-200){
        $('.section2 .left').clearQueue().stop().animate({left: '0%'}, 500)
        $('.section2 .right').clearQueue().stop().delay(1000).animate({right: '0%'}, 500)
    }else{
        $('.section2 .left').clearQueue().stop().delay(1000).animate({left: '-50%'}, 500)
        $('.section2 .right').clearQueue().stop().animate({right: '-50%'}, 500)
    }
    if(sct > section3-200){
        $('.section3 .left').clearQueue().stop().fadeIn(1000);
        $('.section3 .right').clearQueue().stop().delay(1000).fadeIn(1000);
    }else{
        $('.section3 .left').clearQueue().stop().delay(1000).fadeOut(1000);
        $('.section3 .right').clearQueue().stop().fadeOut(1000);
    }
})

// ※clearQueue()란 실행되지 않은 큐에 있는 모든기능을 제거하는 메서드입니다.
// 형식은 clearQueue( [queueName ] ) 으로 구성되어있습니다.
// queueName란에는 삭제할 큐의 이름을 적어주시면된답니다.
// 타입은 String입니다.