$('.hover-opacity div').css('opacity', 0);

$('.banner').on({mouseover:function(){
    let tg = $(this);
    const bottom = tg.find('.x1');
    const top = tg.find('.x2');
    const right = tg.find('.y1');
    const left = tg.find('.y2');

    bottom.css('opacity', '0.3').stop().animate({height: 0}, 500)
    top.css('opacity', '0.3').stop().animate({height: 0}, 500)
    right.css('opacity', '0.3').stop().animate({width: 0}, 500)
    left.css('opacity', '0.3').stop().animate({width: 0}, 500)
}, mouseout:function(){
    let tg = $(this);
    const bottom = tg.find('.x1');
    const top = tg.find('.x2');
    const right = tg.find('.y1');
    const left = tg.find('.y2');

    bottom.stop().animate({height: '50%', opacity: 0}, 500)
    top.stop().animate({height: '50%', opacity: 0}, 500)
    right.stop().animate({width: '50%', opacity: 0}, 500)
    left.stop().animate({width: '50%', opacity: 0}, 500)
}})