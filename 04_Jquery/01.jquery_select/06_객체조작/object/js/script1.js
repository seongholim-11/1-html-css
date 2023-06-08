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