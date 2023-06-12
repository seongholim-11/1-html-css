$('.thumbs a').click(function(e){
    e.preventDefault();
    let path = $(this).attr('href')
    $('.largeImg img').css({opacity: '0'}).animate({opacity: '1'},300).attr('src', path)
})