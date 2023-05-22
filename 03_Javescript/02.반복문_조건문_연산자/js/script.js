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
// a += b; // (a와 b를 더한 값을 a에 할당) a = a+b; x = x + y
let a = 10;
let b = 20;
a += b;
console.log("🚀 ~ file: script.js:30 ~ x:", a)
