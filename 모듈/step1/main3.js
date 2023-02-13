console.log(1); // 1
setTimeout(() => {
    console.log(2); // 2
}, 2000); // mili sec 1000 = 1초
console.log(hap(1, 3)); // import문이 뒤에 있음에도 4 출력 ; 호이스팅 발생
import {hap} from './module.js'
console.log(3); // 3