// promise prototype 활용

const goodSearch = (callback) => {
    // reslove 성공 시 콜백 / reject 함수는 실패 시 콜백
  return new Promise((resolve, reject) => { // 고차 함수 = 반환으로 함수
    setTimeout(() => {
      console.log("상품 조회");
      resolve();
    }, 2000);
  });
};
const cart = () => console.log("카트 담기");

// goodSearch 함수 호출 시 콜백에서 cart 함수 호출하면 순서 보장
goodSearch().then(() => { 
  cart();
});