// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
let text; //선언만  , 초기화가 안됨
text = "Hanamon!"; // (선언 + 초기화 + 할당 된 상태)
console.log(text); // undefined or null or ''
console.log(text);
