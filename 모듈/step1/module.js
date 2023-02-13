export default 1;
// default 사용하면 {} 사용 불가

export const insa = "hello";
export const names = ["ty", "jm", "mj"];
export const hap = (i, j) => {
  // 대입 함수
  return i + j;
};

export class Sonata {
  constructor() {
    this.wheelNum = 4;
    this.speed = 10;
  }
  speedUp = () => {
    this.speed = this.speed + 4;
  };
}
/* 
호이스팅 이슈
1 var i 
2 head 태그 안에 선언한 함수
function
3 import문 ; 모듈 사용(ES6, 브라우저 지원; common)

함수 선언
1 선언형 함수
2 익명 함수 ; 콜백 함수(나중에 실행 시킴) JS 동기적(순서대로 실행)
3 대입 함수 ; 일급 함수 > 고차 함수(:retrun) ; 리덕스(:리액트 상태 관리 구현한 것)를 만드는데 결정적 역할 > 리액트
대입 함수의 전제 조건 : 자바 스크립트에서는 함수도 객체
const func = () => { // 일급 함수 함수도 객체로 사용
}
4 즉시 실행 함수 ; (선언)(호출) ES6 이전에는 호이스팅 이슈 해결 방안으로 사용
 */
