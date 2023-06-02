//box1 text, html 조작
// $('#div1').text('') // 아무것도 안 쓰고 텍스트를 비우다
$('#div1').text('text 메소드 안에 있는 내용을 바꿈') // 아무것도 안 쓰고 텍스트를 비우다
$('#div2').html('text 메소드 안에 있는 내용을 바꿈')
$('#div3').text('<strong>text 메서드</strong>')
$('#div4').html('<strong>html 메서드</strong>')

$('#div1').hover(function(){
    $('#div1').text('text 메소드 안에 있는 내용을 바꿈')
}, function(){
    $('#div1').text('안에 들어있는 텍스트')
})


// box2 src 변경
// $('#changeThis').attr('src', './img/img2.gif')
console.log("🚀 ~ file: script.js:17 ~ $('#changeThis').attr('src'):", $('#changeThis').attr('src'))
$('#changeThis').hover(function(){
    $('#changeThis').attr('src', './img/img2.gif')
}, function(){
    $('#changeThis').attr('src', './img/img1.gif')
})

$('#box3-1').addClass('add')
$('#box3-2').removeClass('add')
$('#box3-3').addClass('remove')
$('#box3-4').removeClass('remove')