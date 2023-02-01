let i = 5
console.log(i);
console.log(x);
var x = 2;

console.log(text);
text = 'goodmorning';
var text;
console.log(text);

/* const btns = document.querySelectorAll('ul li')
for (var j = 0; j < btns.length; j++) {
    btns[j].addEventListener('click', () => {
        console.log(j); // 3, 3, 3으로만 출력 호이스팅 발생
    })
} 
const btns = document.querySelectorAll('ul li')
for (let j = 0; j < btns.length; j++) {
    btns[j].addEventListener('click', () => {
        console.log(j); // let으로 변경하여 1, 2, 3으로 출력 가능
    })
} */

// 즉시 실행 함수
const btns = document.querySelectorAll('ul li')
for (var j = 0; j < btns.length; j++) {
    ((index) => {
        btns[j].addEventListener('click', () => {
            console.log(index);
        }
    )})(j)
}