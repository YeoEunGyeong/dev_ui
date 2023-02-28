const deptList = [
  { deptno: 10, dname: "개발 1팀", loc: "부산" },
  { deptno: 20, dname: "개발 2팀", loc: "양산" },
  { deptno: 30, dname: "개발 3팀", loc: "진해" },
];
console.log(deptList);

deptList.push({ deptno: 33, dname: "개발 4팀", loc: "창원" });

let other = [];
// 배열 중에서 파라미터로 들어온 조건을 만족하는 값만 새로운 배열에 담음 - filter
other = deptList.filter((row) => row.deptno > 20);
console.log(deptList);

let some = [];
some.splice(2, 1, { deptno: 32, dname: "개발새발팀", loc: "진양" });
console.log(some);

console.log(other);
