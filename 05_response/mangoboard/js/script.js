const appBtn = $('.app-btn');

appBtn.on({click:function(){
    $('.bar').toggleClass('add-app-btn');
    $('.mobile-nav').slideToggle(500)
}})