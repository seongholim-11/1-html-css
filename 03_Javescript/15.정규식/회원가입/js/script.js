let  idArea = document.getElementById('idArea')
let  idMes = document.getElementById('idMes')
let  pwArea = document.getElementById('pwArea')
let  pwMes = document.getElementById('pwMes')
let  pwArea2 = document.getElementById('pwArea2')
let  pwMes2 = document.getElementById('pwMes2')
let  name = document.getElementById('name')
let  nameMes = document.getElementById('nameMes')
let  phone = document.getElementById('phone')
let  phMes = document.getElementById('phMes')
let  email = document.getElementById('email')
let  eMes = document.getElementById('eMes')
let  born = document.getElementById('born')
let  bMes = document.getElementById('bMes')
let  gMes = document.getElementById('gMes')

let regid = /^[a-zA-z0-9]{4,}$/
let regpw = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*()_+])/
// let regpw = /^.*(?=^.{8,16})$/

// ? 없거나 있거나(최대 하나)
// ?= 앞쪽과 일치(/ab(?=c)/)
// * 없거나 있거나 많거나 (여러개)
// + 하나 또는 많이(최소 하나)

idArea.addEventListener('blur', function(){
    if(regid.test(idArea.value)){
        idMes.innerHTML = "사용가능한 아이디입니다."
        idMes.style.color = "green"
    }else{
        idMes.innerHTML = "아이디는 영대소문자, 숫자 포함 4글자 이상 가능합니다."
        idMes.style.color = "red"
    }
})

pwArea.addEventListener('blur', function(){
    if(regpw.test(pwArea.value)){
        pwMes.innerHTML = "사용가능한 비밀번호입니다."
        pwMes.style.color = "green"
    }else{
        pwMes.innerHTML = "비밀번호는 특수문자, 문자 포함해서 8자 이상 16자 이하가 가능합니다"
        pwMes.style.color = "red"
    }
})

pwArea2.addEventListener('blur', function(){
    if(pwArea.value == pwArea2.value && !pwArea2.value == ''){
        pwMes2.innerHTML = "비밀번호가 일치합니다."
        pwMes2.style.color = "green"
    }else{
        if((pwArea.value == "") || (pwArea2.value == '')){
            pwArea.focus();
        }else{
            pwMes2.innerHTML = "비밀번호가 불일치합니다."
            pwMes2.style.color = "red"
            pwArea2.value = '';
            pwArea2.focus();
        }
    }
})
