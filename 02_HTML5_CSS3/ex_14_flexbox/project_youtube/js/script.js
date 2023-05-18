const moreBtn = document.querySelector('.info .more-btn');
const title = document.querySelector('.info .title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('add');

})