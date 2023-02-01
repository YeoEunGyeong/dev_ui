// 비교

const a = 1
const b = 2

console.log(a == b);
console.log(a != b);

// 일치
const x = 1
const y = 1
const z = '1'

console.log(x==y);//true
console.log(x == z);//true
console.log(typeof x);//true
console.log(typeof z);//true
//값이 같은지와 타입까지도 같은 지 비교함
console.log(x === z);//true

console.log(a >= b);
console.log(a <= b);