/* $('em').hide();

$('.thumbs a').click(function(){
    $('#caption').remove();
    let path = $(this).attr('href');
    $('.largeImg img').attr({src: path})
    let msg = $(this).next('em').text();

    $('.largeImg').append('<div id="caption"></div>');
    $('.largeImg #caption').text(msg)
    let posy = $('#caption').outerHeight()
    $('.largeImg #caption').stop().animate({bottom: posy},300)

    return false
}) */

$('em').hide();

$('.thumbs a').click(function(e){
    $('#caption').remove();
    let now = $(this);
    let path = now.attr('href') 
    $('.largeImg img').attr('src', path) 

    $('.largeImg').append('<div id="caption"></div>') 
    let text = now.next().text()

    $('#caption').text(text)
    let outerHeight = $('#caption').outerHeight();
    $('#caption').stop().animate({bottom: outerHeight}, 300)
    return false
})