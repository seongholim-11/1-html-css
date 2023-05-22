// operators

// javascript에서 기본적으로 제공되는 약속된 표현식을 연산자라고 합니다.
// 연산자에는 산술, 비교, 논리, 기타 연산자 등이 있다.
// 표현식에는 2개 이상의 연산자를 동시에 사용했을 경우 우선순위별로 표현식을 해석
// 괄호를 사용하여 우선순위를 조절할 수 있음.
// 논리값을 비교하여 참과 거짓을 판단할 수 있음.
// 논리연산자는 &&(or), ||(and), !(not)
// 3항 연산자는 ? 앞 비교값이 참이면 : 앞의 값을 반환, 거짓이면 뒤의 값을 반환

// 산술연산자(Numberic Operators) +, -, *, /, %, **
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(5**2);

const x = 75;
const y = 87;
const add = x + y;
document.write('국어점수: ' + x + "<br />")
document.write('영어점수: ' + y + "<br />")
document.write('합계: ' + add + "<br />")
document.write('평균: ' + (add/2) + "<br /> <hr />")

// 대입연산자(Assignment operators)
let a = 10;
let b = 20;
a += b; // (a와 b를 더한 값을 a에 할당) a = a+b;
a -= b; // a = a- b
a *= b; // a = a * b
a /= b; // a = a / b
a %= b; // a = a % b
a **= b; // a = a ** b
console.log("🚀 ~ file: script.js:30 ~ x:", a)

// 증감연산자(increament, decreament operators)
let j = 10;
console.log("🚀 ~ file: script.js:41 ~ j:", j--);

let k = 10;
console.log("🚀 ~ file: script.js:43 ~ k:", --k)

// 비교연산자(comparison operators)
a == b; // a와 b는 같다.
console.log("🚀 ~ file: script.js:47 ~ a == b:", a == b)
a != b; // a와 b는 다르다.
console.log("🚀 ~ file: script.js:49 ~ a != b:", a != b)
a < b; // a는 b보다 작다.
console.log("🚀 ~ file: script.js:51 ~ a < b:", a < b)
a <= b; // a는 b보다 작거나 같다.
console.log("🚀 ~ file: script.js:53 ~ a <= b:", a <= b)
a > b; // a는 b보다 크다.
console.log("🚀 ~ file: script.js:55 ~ a > b:", a > b)
a >= b; // a는 b보다 크거나 같다.
console.log("🚀 ~ file: script.js:57 ~ a >= b:", a >= b)

// 논리연산자(logical operator) || (or), && (and) , !(not)
const value1 = false;
const value2 = 4>2;

function check(){
    for(let i = 0; i<10 ; i++){
        console.log(`오예 ${i}`);
    }return true
}
// 연산이 많은 값을 뒤쪽으로 배치
console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);
console.log(!value1);

const q = ((7>6) && (1>8));
console.log("🚀 ~ file: script.js:74 ~ q:", q)
const w = ((7>6) || (1>8));
console.log("🚀 ~ file: script.js:76 ~ w:", w)
const e = !(7>6);
console.log("🚀 ~ file: script.js:78 ~ e:", e)

/* let age = prompt("나이가 어떻게 됩니까?", "20")
console.log("🚀 ~ file: script.js:81 ~ age:", age) */

// 20대 대상의 소개팅을 준비 중입니다.
// 그런데 남성은 다 모집이 되었지만 여성은 아직 모집이 다 되지 않았네요.
// prompt 메서드를 활용하여 성별과 나이를 물어봅니다.
// 20대 여성이라면 결과값이 true로, 아니라면 결과값으로 false가 나오게 만드세요.

/* let na = prompt("나이가 어떻게 됩니까?")
let seong = Number(prompt("성별이 어떻게 됩니까?"))
console.log( na >= 20 && na < 30 && seong=="여자" || seong=="여성");
alert( na >= 20 && na < 30 && seong=="여자" || seong=="여성"); */

// 국어, 영어, 수학 점수 받아와서
// 평균 70점 이상, 각 과목 60점 이상이면 참, 아니면 거짓
/* let kuk = Number(prompt("국어 점수?"));
let soo = Number(prompt("수학 점수?"));
let young = Number(prompt("영어 점수?"));
// ceil: 올림, round: 반올림, floor: 소수점 삭제
let total = Math.round(kuk + soo + young);
let ave = total / 3;
let result = (ave >= 70 && kuk >= 60 && soo >= 60 && young >= 60);
console.log(`result: ${result}, 평균: ${ave}, 국어: ${kuk}, 영어: ${young}, 수학: ${soo}`) */

//삼항조건연산자(Ternary operators)
// condition(조건) ? value1(참) : value2(거짓); 
/* const your = 'hard';
const study = (your == 'hard' ? "you are very fool" : "you are very smart")
console.log("🚀 ~ file: script.js:108 ~ study:", study) */

// 지현쌤의 지출 내역은 교통비 3,000원, 식비 7,000원, 음료비 2,000원
// 하루 지출이 만원이 넘으면 ~초과, 안 넘으면 돈관리 잘했어요
/* const kyo = 3_000;
const sik = 7_000;
const m = 2_000;
const add1 = kyo+sik+m;

const result1 = (add1 > 10_000 ? add1 - 10_000 : "돈 관리 잘했어요");
console.log("🚀 ~ file: script.js:118 ~ result1:", result1) */

// 신장과 몸무게 받기, 적정 몸무게 이상인지 아닌지, 적정 몸무게=(신장-100)*0.9

const sin = prompt("신장?")
const mom = prompt("몸무게?")
const joek = (sin-100)*0.9;
const result2 = (mom > joek ? "적정 몸무게 이상" : "적정 몸무게 이하");
console.log("🚀 ~ file: script.js:126 ~ result2:", "적정 몸무게: " + joek + " / " + result2)