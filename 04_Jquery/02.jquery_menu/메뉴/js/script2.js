const menu = $('#nav li')


menu.hover(function(){
    let tg = $(this);
    let onImg = tg.find('.menuText-image>.on');
    let offImg = tg.find('.menuText-image>.off');
    let menuImg = tg.find('.menu-image');
    let imageWidth = menuImg.find('img').innerWidth();

    onImg.css({display: 'block'})
    offImg.css({display: 'none'})

    menuImg.stop().animate({width: imageWidth}, 600)
}, function(){
    let tg = $(this);
    let onImg = tg.find('.menuText-image>.on');
    let offImg = tg.find('.menuText-image>.off');
    let menuImg = tg.find('.menu-image');

    onImg.css({display: 'none'})
    offImg.css({display: 'block'})

    menuImg.stop().animate({width: 0}, 600)
})