import { weatherKey } from "../../apiKEY.js";

const getWeather = (local, callback) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      callback();
    });
};

// insert here
getWeather("seoul", () => {
  console.log("오늘 서울의 날씨는 : ");
  getWeather("jinju", () => {
    console.log("오늘 진주의 날씨는 : ");
    getWeather("busan", () => {
      console.log("오늘 부산의 날씨는 : ");
    });
  });
});