setInterval(videoResize, 100)
let a = $(window).resize(videoResize);

function videoResize() {
    let winH = $(window).innerHeight();
    let winW = $(window).innerWidth();
    let vidW = $('#mainVideo').innerWidth();
    let vidH = $('#mainVideo').innerHeight();

    $('.m-video').css({width: '100%', height: winH})

    if(winH > vidH){
        $('#mainVideo').css({width: 'auto', height: winH, objectFit: 'cover'})
    }
    if(winW > vidW){
        $('#mainVideo').css({width: winW, height: 'auto', objectFit: 'cover'})
    }
};
