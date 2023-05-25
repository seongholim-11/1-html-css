//함수는 호이스팅이 일어난다.
/* love() //호이스팅
function love(){
    for(let i = 1; i <=10; i++){
        document.write("사랑해"+i+"<br/>")
    }
} */

// ------------------------------------------------------------------

// 함수 표현식 - 함수 표현식은 호이스팅이 되지 않는다.
// 변수 안에 들어오는 함수는 익명함수
/* const love1  = function(){
    for(let i = 1; i <=10; i++){
        document.write("사랑해"+i+"<br/>")
    }
}
love1() */

// -----------------------------------------------------------------

// 매개변수(Parameter)
/* let x = function(y){
    return y*y
}
console.log("🚀 ~ file: script.js:15 ~ x(3):", x(3)) */

// -----------------------------------------------------------------

//기명함수 표현
/* let q = function square(w){
    return w*w;
}
q(3)
console.log("🚀 ~ file: script.js:31 ~ q(3):", q(3)) */
//square(w)//에러가 발생했을 때 함수 이름을 포함해서 출력하기 때문에 오류를 빨리 찾을 수 있다.

// -----------------------------------------------------------------

//즉시 실행함수 기본형태
/* (function (){
    //statements
})() */
// 기명 즉시 실행함수

/* (function square1(u){
    console.log(u*u)
})(3) */

/* (function square2(u){
    console.log(u*u)
}(3)) */

//익명 즉시 실행 함수
/* (function (g){
    console.log(g*g)
})(4)
(function(g){
    console.log(g*g)
}(g)) */

// 즉시 실행 함수를 사용하는 이유 - 초기화
// 즉시 실행 함수는 한 번의 실행만 필요로 하는 초기화 코드 부분에 많이 사용

// -----------------------------------------------------------------

//es6 arrow function
/* const print = function(){
    console.log('화살표 함수로 표현해줘')
}
print(); */

const print = () =>  console.log('화살표 함수야')
print();

const add = (a, b) => {
    return console.log("🚀 ~ file: script.js:77 ~ a, b:", a+b)
}
add(5,9);