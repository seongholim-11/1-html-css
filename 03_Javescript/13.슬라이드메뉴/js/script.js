const slideWrap = document.querySelector('.container');
const slideContainer = document.querySelector('.slider-container');
const slide = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slideCount = slide.length;

const pager = document.querySelector('.pager');
const pagerBtn = document.querySelectorAll('.pager span');
let currentIndex = 0;
let timer; //setInterval
let slideHeight = 0;

for (let i = 0; i < slideCount; i++) {
    if (slideHeight < slide[i].offsetHeight) {
        slideHeight = slide[i].offsetHeight;
    }
}
console.log("🚀 ~ file: script.js:18 ~ slideHeight:", slideHeight)

slideWrap.style.height = slideHeight +'px';
slideContainer.style.height = slideHeight +'px';

for(let j = 0; j < slideCount; j++){
    slide[j].style.left = j * 100 +"%";
}

function goToSlider(idx){
    slideContainer.classList.add('animated')
    slideContainer.style.left = -100 * idx + '%';
    currentIndex = idx;
    for(let k = 0; k<pagerBtn.length; k++){
        pagerBtn[k].classList.remove('active')
    }
    pagerBtn[idx].classList.add('active')
}
goToSlider(0)

function startAutoSlide(){
    timer = setInterval(function(){
        let nextIdx = (currentIndex + 1) % slideCount;
        goToSlider(nextIdx)
    },3000)
}
startAutoSlide();

slideWrap.addEventListener('mouseover', function(){
    clearInterval(timer)
})
slideWrap.addEventListener('mouseout', function(){
    startAutoSlide();
})

next.addEventListener('click', function(){
    if(currentIndex == slideCount-1){
        next.classList.add('disabled');
    }else{
        goToSlider(currentIndex + 1)
        next.classList.remove('disabled');
    }
})

prev.addEventListener('click', function(){
    if(currentIndex == 0){
        goToSlider(slideCount-1)
    }else{
        goToSlider(currentIndex-1)
    }
})

for(let i = 0; i < pagerBtn.length; i++){
    pagerBtn[i].addEventListener('click', function(e){
        // 1
        /* let pageNum = e.target.getAttribute('data-idx')
        goToSlider(pageNum) */
        // 2
        /* let pageNum = e.target.innerText-1;
        goToSlider(pageNum) */
        // 3
        goToSlider(i)
    })
}