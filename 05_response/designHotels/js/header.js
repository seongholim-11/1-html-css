/* let t = 0;
let winW = 0; */
const appbarBt = $('.appbarBt1')
const mobileModalMenu = $('.mobile-modal-menu');
const appbarCloseBt = $('.appbarCloseBt');
const header = $('#header');

appbarBt.on('click', function(){
    mobileModalMenu.stop().animate({left: 0}, 500);
    header.stop().animate({left: '100%'}, 500);

})

appbarCloseBt.on('click', function(){
    mobileModalMenu.stop().animate({left: '-100%'}, 500);
    header.stop().animate({left: '0'}, 500);
})