const user = document.querySelector(".user_input");
const btnAdd = document.querySelector(".btn_add");

// 시스템에서 이벤트 감지됨(사용자가 버튼 누르면)
btnAdd.addEventListener("click", function (e) {
  // 콜백 함수
  console.log("plus 호출");
  addRow();
});
user.addEventListener("keypress", (e) => {
  console.log("key ==> ", e.key);
  // == ; 값만 같은 지 비교, === ; 값과 타입이 같은 지 비교
  if (e.key === "Enter") {
    console.log("Enter 이벤트 호출");
    addRow();
  }
});

function addRow() {
  // 사용자가 입력한 텍스트를 받아옴
  const workName = user.value;
  console.log(`사용자가 입력한 값 => ${workName}`);
  if (workName === "") {
    user.focus(); // 커서의 위치를 input type = text 가져옴
    return; // addRow 탈출
  }
  // 조건을 수렴하지 않으면 input text 초기화
  user.value = "";
  user.focus();
}
