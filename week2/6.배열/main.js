// 필터

// arr.filter(callback(element[, index[, array]])[, thisArg])

function Counter() {
  this.sum = 0;
  this.count = 0;
}
// prototype을 이용하면 자바스크립트처럼 사용자 정의 객체를 선언한 뒤
// 사용자 정의 함수를 정의 가능
// typescript - 바닐라 스크립트 기반 위에 얹혀진 언어 ; 객체 지향, 캡슐화, 상속, 다향성
// 자바 스크립틍서도 사용자 정의 객체 만들 수 있음 function
// 사용자 정의 함수를 정의할 때는 prototype 사용
// prototype 사용하여 함수를 정의하는 것은 사용자 정의 API 만드는 것
Counter.prototype.add = function (array) {
  // 정의한 Counter는 표준이 아니기 때문에 배포 또한 되지 않음
  array.forEach(function (item) {
    this.sum += item;
    ++this.sum.count;
  }, this);
};

const obj = new Counter();
obj.add([3, 5, 15]);
console.log(obj.sum);

// 자바 스크립트에서는 함수를 만들 때, 객체를 선언할 때 function 사용
// 객체가 정의하는 함수를 만들 때는 prototype
// 바닐라 스크립트에서는 전변 선언 없이도 생성자에서 초기화 가능
// API(객체와 함수 그리고 변수[const, let])
function Sonata() {
  this.wheelNum;
  this.speed;
  this.carName;
}

Sonata.prototype.stop = function (wheelNum) {
  console.log("stop 호출" + wheelNum);
};

const myCar = new Sonata();
myCar.stop(4);
