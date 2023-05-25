// 배열(비슷한 타입을 묶어 놓은 것을 자료구조라 하고 타입들이 있을 경우 동일한 타입을 담아놓을 수 있음)
// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2, 3, 4];
const arr3 = ["a", "b"];

const fruits = ["사과", "체리", "오렌지", "포도"]
console.log("🚀 ~ file: script.js:8 ~ fruits:", fruits)
console.log("🚀 ~ file: script.js:9 ~ fruits:", fruits.length)
console.log("🚀 ~ file: script.js:10 ~ fruits:", fruits[fruits.length-1])

console.clear();

// 1-1 push -  맨 뒤에 추가
fruits.push("오미자", "🍉")
console.log("🚀 ~ file: script.js:16 ~ fruits:", fruits)

// 1-2 unshift - 맨 앞에 추가
fruits.unshift("🥥")
console.log("🚀 ~ file: script.js:20 ~ fruits:", fruits)

// 1-3 pop - 맨 뒤 삭제
fruits.pop()
console.log("🚀 ~ file: script.js:24 ~ fruits:", fruits)

// 1-4 shift - 맨 앞 삭제
fruits.shift()
console.log("🚀 ~ file: script.js:28 ~ fruits:", fruits)

// 1-5 splice(시작하는 인덱스 번호, 몇 개를 지울 것인지)
fruits.splice(1,3)
console.log("🚀 ~ file: script.js:32 ~ fruits:", fruits)

fruits.push("🍌", "🍑")
console.log("🚀 ~ file: script.js:35 ~ fruits:", fruits)

fruits.splice(1,1, "🍆")
console.log("🚀 ~ file: script.js:38 ~ fruits:", fruits)

const fruits2 = ["🍕", "🍔", "🍟", "🌭", "🍿"]
const newFruits = fruits.concat(fruits2) // 새로운 배열을 만들어준다.
console.log("🚀 ~ file: script.js:42 ~ fruits:", newFruits)

fruits.reverse();
console.log("🚀 ~ file: script.js:45 ~ fruits:", fruits)

const subway = ["2호선" , '9호선', '5호선']
subway.sort();
console.log("🚀 ~ file: script.js:48 ~ subway:", subway)

let theName = ["김문섭", "이신철", "윤채욱", "김가은"]
const result = theName.slice(0,3) // 새로운 배열을 만든다.
console.log("🚀 ~ file: script.js:53 ~ theName:", theName)
console.log("🚀 ~ file: script.js:53 ~ result:", result)

let a = theName.join("><"); //구분자는 데이터를 합쳐준다.
console.log("🚀 ~ file: script.js:57 ~ theName:", a)

console.clear()

// 문자치환
let theText = "img2_out.jpg"
theText = theText.replace("out", "in")
console.log("🚀 ~ file: script.js:64 ~ theText:", theText)

// 문자추출
let theText1 = "img/img10.jpg"
theText1 = theText1.split("/")[1];
theText1 = theText1.substring(3);
theText1 = parseInt(theText1);
console.log("🚀 ~ file: script.js:69 ~ theText1:", theText1)

// 특정 문자가 포함 여부
const theText2 = "hello figma javascript and figma"
// 몇번째 있는지, 없으면 -1값을 나타낸다.
// const findText = theText2.indexOf("figma")

// 있는지 없는지 참거짓으로 나타냄
const findText2 = theText2.includes("hello")
console.log("🚀 ~ file: script.js:77 ~ findText2:", findText2)

/* if(findText>=0){
    console.log("🚀 ~ file: script.js:80 ~ :", "몇 번째 있습니다")
}else{
    console.log("🚀 ~ file: script.js:80 ~ :", "없습니다")
}

console.log("🚀 ~ file: script.js:76 ~ findText:", findText) */

console.clear()

const array = [2, 5, 9, 8, 1]
array.reverse();
console.log("🚀 ~ file: script.js:94 ~ array:", array)
array.sort();
console.log("🚀 ~ file: script.js:96 ~ array:", array)
array.sort((a, b) => b - a);
console.log("🚀 ~ file: script.js:98 ~ array:", array)

{
    const array = [1, 2, 3, 4, 5];
    // const result = array.slice(1,4) // 새로운 배열을 만든다.
    console.log("🚀 ~ file: script.js:103 ~ array:", result)
}