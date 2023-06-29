let videoPlay = 'on';
let soundMuted = 'off';

$('#mainVideo').get(0).autoplay = 'true';
$('#mainVideo').get(0).loop = 0; // 0은 한 번만
$('#mainVideo').get(0).muted = 'true';
$('.m-again').hide();

setInterval(videoResize, 100)
let a = $(window).resize(videoResize);

function videoResize() {
    let winH = $(window).innerHeight();
    let winW = $(window).innerWidth();
    let vidW = $('#mainVideo').innerWidth();
    let vidH = $('#mainVideo').innerHeight();

    $('.m-video').css({ width: '100%', height: winH })

    if (winH > vidH) {
        $('#mainVideo').css({ width: 'auto', height: winH })
    }
    if (winW > vidW) {
        $('#mainVideo').css({ width: winW, height: 'auto' })
    }
};
$('.playPauseIcon').on({
    click: function () {
        if (videoPlay === 'on') {
            videoPlay = 'off'
            $('#mainVideo').get(0).pause();
            $(this).find('i').attr('class', 'fas fa-play')
            $('.m-again').hide();
        } else {
            videoPlay = 'on'
            $('#mainVideo').get(0).play();
            $(this).find('i').attr('class', 'fas fa-pause')
            $('.m-again').hide();
        }
    }
})

$(document).keypress(function (e) {
    if (e.keyCode === 32 && videoPlay === 'on') { // 스페이스바의 keyCode는 32입니다.
        e.preventDefault();
        videoPlay = 'off'
        $('#mainVideo').get(0).pause();
        $('.playPauseIcon').find('i').attr('class', 'fas fa-play')
        $('.m-again').show();
    } else if (e.keyCode === 32 && videoPlay === 'off') {
        videoPlay = 'on'
        $('#mainVideo').get(0).play();
        $('.playPauseIcon').find('i').attr('class', 'fas fa-pause')
        $('.m-again').hide();
    }
});

$('.mutedIcon').on({click: function () {
    if (soundMuted === 'off') {
        soundMuted = 'on';
        $('#mainVideo').get(0).muted  = false;
        $(this).find('i').attr('class', 'fa fa-volume-up')
    } else {
        soundMuted = 'off';
        $('#mainVideo').get(0).muted  = true;
        $(this).find('i').attr('class', 'fa fa-volume-mute')
    }
}})


$('.watchagain').on({click: function () {
    videoPlay = 'on'
    $('#mainVideo').get(0).play();
    $('.playPauseIcon').find('i').attr('class', 'fas fa-pause')
    $('.m-again').hide();
    setId = setInterval(() => {
        videoTimeCountFn()
      }, 1000);
}})

/* $('#mainVideo').on('ended', function() {
    $('.m-again').show();
  }); */


let setId = setInterval(() => {
  videoTimeCountFn()
}, 1000);

function videoTimeCountFn(){
    console.log('비디오 진행 시간 :' + $('#mainVideo').get(0).currentTime)
    console.log('비디오 전체 시간 :' + $('#mainVideo').get(0).duration) // 37.44
    console.log('정지여부 :' + $('#mainVideo').get(0).ended) // 37.44
    if($('#mainVideo').get(0).ended == true){
        $('.m-again').show();
        videoPlay = 'off'
        clearInterval(setId);
        $('.playPauseIcon').find('i').attr('class', 'fas fa-play')

    }
}