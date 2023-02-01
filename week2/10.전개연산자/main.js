const fruits1 = ["🍈", "🍉", "🍑"];
const fruits2 = ["🍒", "🍓", "🍍"];

const fruits3 = ["🍇", ...fruits1];

fruits3.forEach((fruit, index) => {
  console.log(`${index} - ${fruit}`);
});

const fruits4 = [...fruits1, ...fruits2];

fruits4.forEach(function (fruit, index) {
  console.log(`${index} - ${fruit}`);
});

const dept = {
  deptno: 30,
  dname: "아부",
  loc: "암스테르담",
};

const emp = {
  empno: 7566,
  dname: "WINTER",
  sal: "789456",
};

const deptnemp = { ...dept, ...emp };
console.log(deptnemp);

const emp2 = { ...emp, empno: 7777, ename: "KARINA", sal: "987654" };

console.log(emp);
console.log(emp2);

let items = [
  { id: 1, name: "벤치프레스", count: 10 },
  { id: 2, name: "랫풀다운", count: 12 },
  { id: 3, name: "스쿼트", count: 30 },
];

let items2 = [...items];
console.log(items2);

items2 = [...items, { id: 4, name: "숨쉬기", count: 333 }];
console.log(items2);

items2 = [...items, { id: 5, name: "눈감기" }];
console.log(items2);
