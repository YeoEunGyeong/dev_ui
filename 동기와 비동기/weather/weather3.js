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
    })
};

// insert here
getWeather('seoul').then(() => {
    console.log('오늘 서울의 날씨는 : ');
})
  getWeather('jinju', () => {
    console.log('오늘 진주의 날씨는 : ');
  });
  getWeather('busan', () => {
    console.log('오늘 부산의 날씨는 : ');
  });
