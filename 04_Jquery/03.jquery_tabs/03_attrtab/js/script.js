const spring = $('#springBtn a')
const summer = $('#summerBtn a')
const fall = $('#fallBtn a')
const winter = $('#winterBtn a')
let image = $('#image img')

spring.click(function(){
    image.attr('src', './images/spring.jpg')
})
summer.click(function(){
    image.attr('src', './images/summer.jpg')
})
fall.click(function(){
    image.attr('src', './images/fall.jpg')
})
winter.click(function(){
    image.attr('src', './images/winter.jpg')
})