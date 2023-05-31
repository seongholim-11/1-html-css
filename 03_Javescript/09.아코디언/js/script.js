/* const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')
const question = document.getElementsByClassName('question')
const heading = document.getElementsByClassName('heading')
const body = document.getElementsByClassName('body')


function activeBody(){
    for(let i = 0; i < question.length; i++){
        body[i].style.display = 'none'
    }
    const active = document.querySelector('.active>.body')
    active.style.display = 'block'
}

activeBody();

for(let j = 0; j<heading.length; j++){
    heading[j].addEventListener('click', function(e){
        for(let k = 0; k<question.length; k++){
            question[k].classList.remove('active')
            e.target.parentNode.classList.add('active')
            activeBody()
        }
    })
}

btn.addEventListener('click', function(){
    for(let k = 0; k<question.length; k++){
        body[k].style.display = 'none'
    }
})
btn1.addEventListener('click', function(){
    for(let k = 0; k<question.length; k++){
        body[k].style.display = 'block'
    }
}) */

const heading = document.getElementsByClassName('heading');
const body = document.getElementsByClassName('body');
const question = document.getElementsByClassName('question');

