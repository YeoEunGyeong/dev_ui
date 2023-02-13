import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

// async / await
// Promise가 반환하는 함수에서만 await 붙여야 함
// console.log에는 awit 붙이지 않음
// async와 await 함께 사용
const runTest = async () => {
  await getWeather("seoul");
  console.log("오늘 서울의 날씨는 : ");
  await getWeather("jinju");
  console.log("오늘 진주의 날씨는 : ");
  await getWeather("busan");
  console.log("오늘 부산의 날씨는 : ");
};
runTest();

/* 
날씨 제공하는 서버에 요청(request)하고 응답(response)을 받아오는 시간이 걸리므로
어느 지역이 먼저 처리되는 지 알 수 없음(실행될 때마다 달라질 수 있음)
호출하는 순서는 처리 순서를 의미 Xxx

순서를 보장하여 호출하려면 ??
콜백 메서드 반복 작성
들여쓰기와 arrow function 반복 ; depth 깊어짐, 소스 분석의 어려움 발생

자바 스크립트는 기본적으로 순차적 처리(동기)

 */