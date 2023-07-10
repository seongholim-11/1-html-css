const p = document.querySelectorAll('p')
const p1 = document.getElementsByTagName('p')

// nodelist는 정적이고 hetmlcollection(forEach(), entries(), keys(), values() 메서드를 갖고 있다)는 동적이다.

const red = document.getElementById('red').parentNode

const ul = document.getElementById('color')
const ulChild = ul.children;

const blue = document.getElementById('blue')
const prevblue = blue.previousElementSibling;
