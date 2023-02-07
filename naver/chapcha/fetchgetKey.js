const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "EGe9koUsGWoODIz8HYiG");
myHeaders.append("X-Naver-Client-Secret", "WCATwvuEoc");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.key);
  })
  /*   .then((response) => response.json())
  .then((result) => {
    const imsi = JSON.stringify(result)
    console.log(imsi);
    console.log(result.key);
}) */
  .catch((error) => console.log("error", error));
