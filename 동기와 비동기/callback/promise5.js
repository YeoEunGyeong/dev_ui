const goodSearch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("상품 조회");
      resolve();
    }, 3000);
  });
};
const cart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("카트 담기");
      resolve();
    }, 2000);
  });
};
const account = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("결제");
      resolve();
    }, 2000);
  });
};

const delivery = () => console.log("배송");

goodSearch()
.then(cart) // 파라미터로 cart 넘기면 resolve cart 함수 전체를 받아 처리
.then(account) // account 넘기면 resolve account 받아 처리
.then(delivery)
.then(() => console.log("배송 완"))

