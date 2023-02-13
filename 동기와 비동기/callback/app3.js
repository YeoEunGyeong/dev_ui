// 파라미터로 함수가 올 수 있음
// 함수는 객체
// 대입 함수가 가능 ; 함수를 받는 변수 선언 가능

const goodSearch = (callback) => { // 콜백 함수 선언
  setTimeout(() => {
    console.log("상품 조회"); // 2초 후 상품 조회 먼저 실행
    callback();
  }, 2000);
};
const cart = () => console.log("카트 담기");

goodSearch(() => { 
  cart(); // 후에 카트 담기 실행
});
