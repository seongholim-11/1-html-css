$('nav').hover(function(){
    $(this).next('.sub-shadow').addClass('active')
    $(this).find('ul').addClass('active')

},function(){
    $(this).next('.sub-shadow').removeClass('active')
    $(this).find('ul').removeClass('active')
})