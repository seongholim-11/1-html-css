
document.write('한시간지났네');
document.write('2교시네');
/* document.write('3교시때는 뭐하지'); */

//keywords
//this, class, int 변수로 사용할 수 있는 것들 즉 자바스크립트가 사용하는 예약어

//variable(변수)
// 1. var 2. let 3. const
// 1. var는 한 번 선언된 변수를 다시 선언 가능, 재정의가 가능함, 호이스팅(최상위로 끌러올려진 것처럼 동작하는 것)
// 2. let은 한 번 선언한 변수는 다시 선언할 수 없음, 재정의가 가능함 1. 선언 및 초기화 단계 2, 할당 단계

// var name;
// console.log(name);
// console.log(name);
// var name = 'how';
// console.log(name);

/* let name = 'seongho';
console.log(name);
let name2 = 'how';
console.log(name2); */

//3. const 선언과 동시에 값을 대입, 변하지 않는 값을 선언할 때
// 보안상 다른 해커가 값을 변경하는 것을 막을 수 있음.
// 실수도 방지할 수 있음.
// 선언 + 초기화 + 할당이 동시에 일어나야 함.

/* const a = '123';
console.log("🚀 ~ file: variable.js:30 ~ a:", a) */

// 변경(Mutable)이 가능한 것은 let, 변경이 불가능(Immutable)한 것은 const

//전역변수(Global scope)와 지역변수(Local scope)
//전역 변수 - 어디서든 불러내면 사용가능, 메모리에 저장되어 실행되는 순간부터 종료되는 순간까지 실행가능
//지역 변수 - 

/* let globalName = 'global name'

{
    let names = 'ho';
    console.log("🚀 ~ file: variable.js:40 ~ globalName:", globalName)
    
}
console.log("🚀 ~ file: variable.js:43 ~ names:", names) */

//변수 호이스팅
name2 = '123';
console.log("🚀 ~ file: variable.js:50 ~ name2:", name2);
var name2;


const age = 30;
if(age>19){
    let txt = '성인'
    console.log("🚀 ~ file: variable.js:57 ~ txt:", txt)
}
else{
}

//함수 스코프
function add(num1, num2){
    var result = num1 + num2;
    console.log("🚀 ~ file: variable.js:65 ~ add ~ result:", result)  
}
add(1,2);


//변수 타입들
//primitive(더이상 나눠지지 않은 타입)
//number(숫자타입)
//string(문자타입)
//boolean(참, 거짓)
//null(빈값)
//undefined(정의되지 않은 값)
//symbol(고유한 값)
//value(값)

//object(하나의 아이템들을 묶어서 한 박스로 관리), 박스 컨테이너에 메모리

//fuction - 변수로 할당이 가능, 인자값 리턴 타입 가능

//number(숫자 타입)
const count = 17;
const size = 17.7;
console.log(`value: ${count}, type: ${typeof size}`);
console.log("value: " + count + ", type: " + typeof size);
