$('nav>ul').hover(function(){
    $('nav>ul').stop().animate({height: 250},500)
},function(){
    $('nav>ul').stop().animate({height: 40},500)
})

$('nav>ul').focusin(function(){
    $('nav>ul').stop().animate({height: 250},500)
})

$('nav>ul').focusout(function(){
    $('nav>ul').stop().animate({height: 250},500)   
})