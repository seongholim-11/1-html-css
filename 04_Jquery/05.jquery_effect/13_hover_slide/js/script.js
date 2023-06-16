$('.box1').on({'mouseover':function(){
    $(this).stop().animate({width: 920},500)
}, 'mouseout':function(){
    $(this).stop().animate({width: 200},500)
}})

$('.box2').on({'mouseover':function(){
    $('.visual').stop().animate({left: -240}, 500)
    $(this).stop().animate({width: 920},500)
}, 'mouseout':function(){
    $('.visual').stop().animate({left: 0}, 500)
    $(this).stop().animate({width: 200},500)
}})

$('.box3').on({'mouseover':function(){
    $('.visual').stop().animate({left: -480}, 500)
    $(this).stop().animate({width: 920},500)
}, 'mouseout':function(){
    $('.visual').stop().animate({left: 0}, 500)
    $(this).stop().animate({width: 200},500)
}})

$('.box4').on({'mouseover':function(){
    $('.visual').stop().animate({left: -720}, 500)
    $(this).stop().animate({width: 920},500)
}, 'mouseout':function(){
    $('.visual').stop().animate({left: 0}, 500)
    $(this).stop().animate({width: 200},500)
}})