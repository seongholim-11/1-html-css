const menu = $('.title')

menu.click(function(){
    $(this).next().slideToggle();
})