const audioplay = document.getElementById('aplay')
const audiopause = document.getElementById('apause')
const audio = document.getElementById('audioplay')
const videoplay = document.getElementById('vplay')
const videopause = document.getElementById('vPause')
const video = document.getElementById('videoplay')

audioplay.addEventListener('click', function(){
    audio.play();
})
audiopause.addEventListener('click', function(){
    audio.pause();
})
videoplay.addEventListener('click', function(){
    video.play();
})
videopause.addEventListener('click', function(){
    video.pause();
})


