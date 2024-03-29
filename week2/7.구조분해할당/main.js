// 구조 분해 할당

const fruits = ["🍈", "🍉", "🍑"];
// 구조 분해 할당 전
const fr1 = fruits[0];
const fr2 = fruits[1];
const fr3 = fruits[2];
console.log(fr1, fr2, fr3);
// 후 
const [f1, f2, f3] = fruits;
console.log(f1, f2, f3);

const dept = {
  deptno: 30,
  dname: "개발부",
  loc: "제주",
};
const { deptno, dname, loc } = dept;
// 객체일 때는 {}, 배열일 때는 []
console.log(deptno, dname, loc);
