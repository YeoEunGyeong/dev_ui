// 파라미터로 함수가 올 수 있음
// 함수는 객체
// 대입 함수가 가능 ; 함수를 받는 변수 선언 가능

const goodSearch = (callback) => {
  // 콜백 함수 선언
  setTimeout(() => {
    console.log("상품 조회");
    callback();
  }, 3000);
};
const cart = (callback) => {
  setTimeout(() => {
    console.log("카트 담기"); 
    callback();
  }, 2000);
};
const account = () => console.log("결제");

goodSearch(() => { // 1 조회 출력 후 순서대로
    cart(() => { // 2 카트 담기
        account() // 3 결제
    }) 
});