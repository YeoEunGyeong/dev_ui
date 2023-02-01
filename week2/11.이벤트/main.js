// 클래스값이면 .a 태그 이름이면 a
const a = document.querySelector("a");
console.dir(a); // DOM구조를 볼 수 있음
console.log(a);

a.onclick = () => {
  console.log("링크 클릭");
};
a.onclink = () => {
  console.log("링크 클릭 다시!!!");
};

a.addEventListener("click", () => {
  console.log("클릭");
});
a.addEventListener("click", () => {
  console.log("클릭 다시!!!");
});
