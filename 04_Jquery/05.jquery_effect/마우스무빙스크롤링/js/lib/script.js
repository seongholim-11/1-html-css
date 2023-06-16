const galleryWrap = $('.gallery-wrap')
let offset = galleryWrap.offset().left
console.log("🚀 ~ file: script.js:3 ~ offset:", offset)


galleryWrap.on({mousemove(e){
    if(e.pageX >= 1920){
        return false
    }else{
        $(this).css({left: -e.pageX+offset})
    }
}})