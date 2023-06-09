// on 메서드
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

// trigger() 메서드
$('.btn5').trigger("mouseover");
$('.btn4').click();

// preventDefault() 메서드
// 1
$('.btn6').on('click', function(e){
    e.preventDefault();
    $('.txt1').css({background: 'red'})
})

// 2
$('.btn7').on('click', function(){
    $('.txt2').css({background: 'yellow'});
    return false;
})

// 3
{/* <p><button class="btn8"><a href="javascript:">버튼3</a></button></p>
<p class="txt3">내용3</p> */}

//click
$('.clickTest').click(function(){
    $(this).text('클릭 되었습니다.')
})

const div1 = $('#div1')
const div1Width = div1.width();
const div1Height = div1.height();
const div1FontSize = div1.css('fontSize');
const div1Back = div1.css('background-color');

$('.div1-1').text(div1Width);
$('.div1-2').text(div1Height);
$('.div1-3').text(div1FontSize);
$('.div1-4').text(div1Back);

// 