// 변수선언시 var는 사용하지 않음 - 호이스팅때문
// const - 재할당 불가
// 입력받는 값에 대한 유효성 검사도 js로 함
const num = 5; //선언과 초기화
const pi = 3.14;
// num = 1;재할당 불가
let no = 3;
no = 6;
console.log(num);
console.log(no);
//typeof 타입을 판별하는 연산자
console.log(typeof pi);
// NaN -> Not a Number - 숫자로 표기할 수 없음
console.log(typeof (num + undefined)); //NaN
