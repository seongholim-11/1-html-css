$(window).resize(function(){
    let boxWidth = $('img').width();
    let boxHeight = $('img').height();
    console.log("🚀 ~ file: script.js:3 ~ $ ~ boxWidth:", boxWidth)

    if(boxWidth<1920){
        $('#main').height(boxHeight)
    }
})