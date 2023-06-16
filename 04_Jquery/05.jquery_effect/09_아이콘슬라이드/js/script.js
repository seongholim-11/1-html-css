$('.iconBtn').each(function(index){
    $(this).on({click:function(){
        $('.iconBtnOn').stop().animate({left: 118*index}, 0, function(){
            $('.iconBtnOn').css({backgroundPosition: -118*index+"px 0px", transition: '0.6s'})
            $('.iconBtn').removeClass('addIconOn')
            $(this).addClass('addIconOn')
        })
    }})
})