// 1. 고정된 값
/* const name = "ho";
const age = '25';
const gender = 'm';

function print(name, age, gender) {
    console.log(name);
    console.log(age);
    console.log(gender);
}

print(name, age, gender); */

const obj1 = {};
// const obj2 = new object();

function print1(person) {
    console.log("🚀 ~ file: script.js:18 ~ person:", person.name)
    console.log("🚀 ~ file: script.js:18 ~ person:", person.age)
}

const ho1 = {name: 'hoo', age: '30'}
const seong1 = {name: 'seong', age: '90'}
print1(ho1)
print1(seong1)

console.log(ho1.name)
console.log(ho1['name'])