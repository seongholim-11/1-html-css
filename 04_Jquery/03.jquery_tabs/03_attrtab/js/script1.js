const spring = $('#springBtn a')
const summer = $('#summerBtn a')
const fall = $('#fallBtn a')
const winter = $('#winterBtn a')
let image = $('#image')

spring.click(function(e){
    e.preventDefault();
    image.removeClass()
    image.addClass('spring');
})
summer.click(function(e){
    e.preventDefault();
    image.removeClass()
    image.addClass('summer');
})
fall.click(function(e){
    e.preventDefault();
    image.removeClass()
    image.addClass('fall');
})
winter.click(function(e){
    e.preventDefault();
    image.removeClass()
    image.addClass('winter');
})