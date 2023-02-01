const express = require("express");
const app = express();
const client_id = "YOUR_CLIENT_ID"; //개발자센터에서 발급받은 Client ID
const client_secret = "YOUR_CLIENT_SECRET"; //개발자센터에서 발급받은 Client Secret
const code = "0";
app.get("/captcha/nkey", function (req, res) {
    // 네이버 서버가 제안하는 URL 주소 ; 키값을 받아와야 함 (인증 과정이라고 생각)
  const api_url = "https://openapi.naver.com/v1/captcha/nkey?code=" + code;
  // 네이버가 제공하는 URL 주소로 네이버 서버에 요청
  // npm i request
  const request = require("request");
  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": "EGe9koUsGWoODIz8HYiG",
      "X-Naver-Client-Secret": "WCATwvuEoc",
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/captcha/nkey app listening on port 3000!");
});
