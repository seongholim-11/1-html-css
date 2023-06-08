// 웹접근성을 위하여~
// 1
$('.btn1').on('focus mouseover', function(){
    $('.on1').text("welcome")
})
$('.btn1').on('blur mouseout', function(){
    $('.on1').text("bye")
})
// 2
$('.btn2').on({"mouseover focus" : function(){
    $('.on2').text("welcome")
}})

$('.btn2').on({"mouseout blur" : function(){
    $('.on2').text("bye")
}})
// 3
$('.btn2').on({"mouseover" : function(){

}, "focus": function(){

}})

$('.btn3-1').on('focus mouseover', function(){
    $('.p1').css({color: 'red'})
})
$('.btn3-1').on('blur mouseout', function(){
    $('.p1').css({color: 'black'})
})
$('.btn3-2').on('focus mouseover', function(){
    $('.p2').css({color: 'blue'})
})
$('.btn3-2').on('blur mouseout', function(){
    $('.p2').css({color: 'black'})
})

$('.btn4').click(function(){
    $(this).parent().next().css({color: 'green', fontWeight: 'bold', fontSize: '20px'})
})
$('.btn5').mouseover(function(){
    $(this).parent().next().css({color: 'red', fontWeight: '700', fontSize: '25px'})
})

$('.btn5').trigger("mouseover");
$('.btn4').click();