const menu = $('#nav li')


menu.hover(function(){
    let tg = $(this);
    let onImg = tg.find('.menuText-image>.on');
    let offImg = tg.find('.menuText-image>.off');
    let menuImg = tg.find('.menu-image');
    let imageHeight = menuImg.find('img').innerHeight();

    onImg.css({display: 'block'})
    offImg.css({display: 'none'})

    menuImg.stop().animate({height: imageHeight}, 600)
}, function(){
    let tg = $(this);
    let onImg = tg.find('.menuText-image>.on');
    let offImg = tg.find('.menuText-image>.off');
    let menuImg = tg.find('.menu-image');

    onImg.css({display: 'none'})
    offImg.css({display: 'block'})

    menuImg.stop().animate({height: 0}, 600)
})