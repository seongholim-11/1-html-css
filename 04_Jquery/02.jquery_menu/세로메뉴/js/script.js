// 1
/* $('.sub').hide();

$('.title').click(function(){
    $('.sub').hide();
    $(this).next().show();
}) */

// 2
/* let a = 0;

$('.sub').hide();

$('.title').click(function(){
    if(a == 0){
        a = 1;
        $(this).next().slideDown();
    }else{
        a = 0;
        $(this).next().slideUp();
    }
}) */

// 3
$('.sub').hide();

$('.title').click(function(){
    if($('this').next().css('display') == 'none'){
        $('.sub').slideUp();
    }
    $(this).next().slideDown();
})