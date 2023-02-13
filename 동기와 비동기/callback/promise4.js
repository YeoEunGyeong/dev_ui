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
  .then(() => cart())
  .then(() => account())
  .then(() => delivery());
