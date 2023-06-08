//before/after/inserBefore/insertAfter

$('#beforeAfter p:eq(2)').after('<p>After에 의한 내용</p>').css('background', 'red');
$('<p>insertAfter에 의한 내용</p>').insertAfter('#beforeAfter p:eq(1)').css('background', 'yellow');

$('#beforeAfter p:eq(1)').before('<p>before에 의한 내용</p>').css('background', 'blue');
$('<p>insertBefore에 의한 내용</p>').insertBefore('#beforeAfter p:eq(0)').css('background', 'green');

//append/appendTo/prepend/prependTo
const basket = $('#basket');
const apple = $('#apple');
const banana = $('#banana');
const orange = $('#orange');

/* basket.append(apple)
basket.append(orange)
basket.append(banana) */

/* apple.appendTo(basket)
orange.appendTo(basket)
banana.appendTo(basket) */

/* basket.prepend(apple)
basket.prepend(orange)
basket.prepend(banana) */

apple.prependTo(basket)
orange.prependTo(basket)
banana.prependTo(basket)

//clone/remove/empty
let copyObj = $('.clone1').children().clone();
let obj2 = $('.remove');
copyObj.prependTo(obj2)

// $('.empty').remove();
$('.empty').empty();

/* $('section h2').replaceWith('<h3>replace method</h3>');
$('<p>change</p>').replaceAll('section div'); */

$(document).on('mouseover','section h2', function(){
    $(this).replaceWith('<h3>replace method</h3>')
})

$(document).on('mouseout','section h3', function(){
    $(this).replaceWith('<h2>제목1</h2>')
})

// show/hide
$('#show').show()
$('#hide').hide()

// fadeIn/fadeOut/fadeTo
$('#fadeIn').fadeIn(2000);
$('#fadeOut').fadeOut(2000);
$('#fadeTo').fadeTo(5000, 0.5);

$('#slideDown').slideDown(2000)
$('#slideUp').slideUp(2000)

//hover 문법, hover 됐을 때, 안 됐을 때
$('.hover').hover(function(){
    $(this).find('#slide').slideDown(2000)
}, function(){
    $(this).find('#slide').slideUp(2000)
})

//animate
$('.ani1').animate({left: '300px', top: '200px'},1000)
$('.ani2').delay(1000).animate({bottom: '400px'},2000).animate({bottom: '50px', right: '500px'},2000).animate({bottom: '140px', right: '510px'},2000)