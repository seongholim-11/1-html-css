const menu=$('.title');

menu.on('mouseover', function(){
    const th = $(this).next();
    $('.sub').slideUp();

    if(th.is(':visible')){
        th.slideUp();
    }else{
        th.slideDown();
    }
})