let idArea = document.getElementById('idArea')
let idMes = document.getElementById('idMes')
let pwArea = document.getElementById('pwArea')
let pwMes = document.getElementById('pwMes')
let pwArea2 = document.getElementById('pwArea2')
let pwMes2 = document.getElementById('pwMes2')
let $name = document.getElementById('name')
let nameMes = document.getElementById('nameMes')
let phone = document.getElementById('phone')
let phMes = document.getElementById('phMes')
let email = document.getElementById('email')
let eMes = document.getElementById('eMes')
let born = document.getElementById('born')
let bMes = document.getElementById('bMes')
let gMes = document.getElementById('gMes')

let regid = /^[a-zA-z0-9]{4,}$/
let regpw = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*()_+])/
let regname = /^[a-zA-Z가-힣]{2,20}$/
let regphone = /(^010)([0-9]{3,4})([0-9]{4})$/
let regemail = /^[a-zA-Z0-9]([-_.]?\w+)*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/g;
let regborn = /[0-9]{8}$/g


// ? 없거나 있거나(최대 하나)
// ?= 앞쪽과 일치(/ab(?=c)/)
// * 없거나 있거나 많거나 (여러개)
// + 하나 또는 많이(최소 하나)

idArea.addEventListener('blur', function () {
    if (regid.test(idArea.value)) {
        idMes.innerHTML = "사용가능한 아이디입니다."
        idMes.style.color = "green"
    } else {
        idMes.innerHTML = "아이디는 영대소문자, 숫자 포함 4글자 이상 가능합니다."
        idMes.style.color = "red"
    }
})

pwArea.addEventListener('blur', function () {
    if (regpw.test(pwArea.value)) {
        pwMes.innerHTML = "사용가능한 비밀번호입니다."
        pwMes.style.color = "green"
    } else {
        pwMes.innerHTML = "비밀번호는 특수문자, 문자 포함해서 8자 이상 16자 이하가 가능합니다"
        pwMes.style.color = "red"
    }
})

pwArea2.addEventListener('blur', function () {
    if (pwArea.value == pwArea2.value && !pwArea2.value == '') {
        pwMes2.innerHTML = "비밀번호가 일치합니다."
        pwMes2.style.color = "green"
    } else {
        if ((pwArea.value == "") || (pwArea2.value == '')) {
            pwArea.focus();
        } else {
            pwMes2.innerHTML = "비밀번호가 불일치합니다."
            pwMes2.style.color = "red"
            pwArea2.value = '';
            pwArea2.focus();
        }
    }
})

$name.addEventListener('blur', function () {
    if (regname.test($name.value)) {
        nameMes.innerHTML = "사용가능한 이름입니다."
        nameMes.style.color = "green"
    } else {
        nameMes.innerHTML = "이름은 한글 또는 영어로 2자 이상 20자 이하가 가능합니다."
        nameMes.style.color = "red"
        $name.value = '';
        $name.focus();
    }
})

phone.addEventListener('blur', function () {
    if (regphone.test(phone.value)) {
        phMes.innerHTML = "사용가능한 번호입니다."
        phMes.style.color = "green"
    } else {
        phMes.innerHTML = "'010'으로 시작하여 '-' 구분없이 번호를 입력해주세요"
        phMes.style.color = "red"
        phone.value = '';
        phone.focus();
    }
})

email.addEventListener('blur', function () {
    if (regemail.test(email.value)) {
        eMes.innerHTML = "사용가능한 이메일입니다."
        eMes.style.color = "green"
    } else {
        if (email.value == "") {
            eMes.innerHTML = ""
        } else {
            eMes.innerHTML = "다시 입력해주세요"
            eMes.style.color = "red"
            email.value = '';
            email.focus();
        }
    }
})

born.addEventListener('blur', function () {
    if (regborn.test(born.value)) {
        bMes.innerHTML = ""
    } else {
        if (born.value == "") {
            bMes.innerHTML = ""
        } else {
            bMes.innerHTML = "8자리 생년월일을 입력해주세요"
            bMes.style.color = "red"
            born.value = '';
            born.focus();
        }
    }
})

document.getElementById('submit').onclick = function () {
    if (idArea.value == "") {
        alert("아이디를 입력해주세요")
        return false
    } else {
        if (!regid.test(idArea.value)) {
            alert('아이디는 대문자, 소문자, 숫자 포함 4글지 이상만 가능')
            idArea.value = "";
            return false
        } else {
            if (pwArea.value == "") {
                alert("비밀번호를 입력해주세요")
                return false
            } else {
                if (pwArea.value != pwArea2.value) {
                    alert('비밀번호가 일치하지 않습니다.')
                    return false
                } else {
                    if ($name.value == "") {
                        alert("이름을 입력해주세요")
                        return false
                    } else {
                        if (phone.value == "") {
                            alert("번호를 입력해주세요")
                            return false
                        } else {
                            if (email.value == "") {
                                alert("이메일을 입력해주세요")
                                return false
                            } else {
                                if (born.value == "") {
                                    alert("생년월일을 입력해주세요")
                                    return false
                                } else {
                                    if (document.querySelector('[name=gender]:checked') == null) {
                                        gMes.style.color = 'red'
                                        gMes.innerHTML = '성별을 체크해주세요'
                                        document.getElementById('female').focus();
                                    } else {
                                        location.href = 'login.html'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}