import * as all from './module.js'

console.log(all);
console.log(all.insa);
console.log(all.names);
// 매개 변수로 함수를 받을 수 있다는 것은 함수가 객체라는 의미
// 리턴 타입을 함수로 사용 가능 = 고차 함수
// 변수가 함수를 참조 가능 = 일급 함수
// 이런 것들이 가능한 객체를 일급 객체라 함
console.log(all.hap);

const myCar = new Sonata()

console.log(`자동차 바퀴수 : ${myCar.wheelNum}`);
myCar.speedUp()
console.log(`현재 차 속도 : ${myCar.speed}`);