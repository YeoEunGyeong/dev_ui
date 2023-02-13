const hap = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};
const x = hap(2, 3, (result) => {
  console.log(result); // callback 함수로 인해 호출 기회 갖음
});
//console.log("x : " + x);
const y = x;
console.log("y : " + y);
