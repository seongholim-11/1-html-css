/* const targetLink = document.querySelectorAll('.tab-menu a')
const tabContent = document.querySelectorAll('#tabContent div')

for(let i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        e.preventDefault();
        const orgTarget = e.target.getAttribute('href')
        const tabTarget = orgTarget.replace("#", "")
        for(let j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = 'none'
        }
        document.getElementById(tabTarget).style.display = 'block'

        for(let k = 0; k < targetLink.length; k++){
            targetLink[k].classList.remove('active');
            e.target.classList.add('active')
        }
    })
} */

const tab_menu = document.querySelectorAll('.tab-menu a');
const tabContent = document.querySelectorAll('#tabContent div');
console.log("🚀 ~ file: script.js:23 ~ tabContent:", tabContent)

for(let i = 0; i < tab_menu.length; i++){
    tab_menu[i].addEventListener('click', function(e){
        for(let j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = 'none';
        }
        const a = e.target.getAttribute('href')
        const b = a.replace('#', '')

        document.getElementById(b).style.display = 'block'

        tab_menu.forEach(element => {
            element.classList.remove('active');
            e.target.classList.add('active')
        });
    })
}