const obj = {
  a: 1,
  b: 2,
  c: 3,
  e: null,
};
// 구조 분해시 같은 변수를 사용불가
const { a, b } = obj;
console.log(a);
console.log(b);
//console.log(e);
const { c } = obj;
// 초기화도 가능하다 - 구조분해할당시
const { e = 5 } = obj;
const { y = 5 } = obj;
console.log(e);
console.log(y); //obj에 y 가 없으니 14번초기화된 값이 출력

const arr = [1, 2, 3, 4, 5];
const [i, j, ...rest] = arr;
const [i2, j2, ...abc] = arr;
console.log(i);
console.log(j);
console.log(rest);
