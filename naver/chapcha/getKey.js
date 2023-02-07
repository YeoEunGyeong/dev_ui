/* 
ExpresssmAPI 이용 시 웹 및 모바일 애플리케이션[하이브리드앱(웹 + 앱{네이티브})]을 위한 
기능을 제공하는 간결하고 유연한 Node.js웹 애플리케이션 프레임워크
ExpressAPI를 이용하면 자유롭게 활용할 수 있는 http 유틸리티 메소드 및 미들웨어를 통해 api를 작성 
*/

const express = require("express"); // 웹 어플리케이션을 위한 프레임워크 선언
// 선언하면 프레임워크가 제공하는 API 사용 가능 -> require 함수 사용
// 리액트에선 import 제공
// <script type = "module"></script> 지원하게 되면서 넷플릭스가 서버 사이드를 node.js 기반
const app = express();
// 네이버 서버에서 발급한 고유 아이디값 (회원가입이 되어 있고 어플리케이션 등록했을 시 가능)
const client_id = "EGe9koUsGWoODIz8HYiG"; //개발자센터에서 발급받은 Client ID
// 개발자 센터에서 어플리케이션을 등록하고 받은 PW
const client_secret = "WCATwvuEoc"; //개발자센터에서 발급받은 Client Secret
const code = "0";
let key;
// exptessjs에서는 REST API 지원하는 메서드 제공
// 두 번째 파라미터는 콜백 함수(첫 번째 파라미터 요청에 대한 응답을 받기 위해 호출되는 함수)
// http 프로토콜을 이용하여 서버에 요청하고 응답 처리 위해서는
// 어떤 언어이든 요청 객체와 응답 객체를 제공받아야 함 → 익스프레스 제공
// req는 요청 객체의 인스턴스 변수로 express로 부터 객체 주입 받음 ; 사용자가 생성 불가
// 이런 경우 의존성 주입(Dependency Injection)이라고 함
app.get("/captcha/nkey", function (req, res) {
    // 네이버 서버가 제안하는 URL 주소 ; 키값을 받아와야 함 (인증 과정이라고 생각)
  const api_url = "https://openapi.naver.com/v1/captcha/nkey?code=" + code;
  // 네이버가 제공하는 URL 주소로 네이버 서버에 요청
  // npm i request
  const request = require("request");
  const options = {
    url: api_url,
    // http 프로토콜을 통해 전송할 때 header body가 있는데 get은 그 중 header 이용
    headers: {
      "X-Naver-Client-Id": "EGe9koUsGWoODIz8HYiG",
      "X-Naver-Client-Secret": "WCATwvuEoc",
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
      // res.end(body);
      // console.log(body);
      key = body.substring(8, 24)
      console.log(key);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
// express로 구성하는 서버의 포트 번호 3000
// 완성 URL
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/captcha/nkey app listening on port 3000!");
});

/* 
REST API
우리가 하고 싶은 작업에 따라 다른 메서드로 요청하는 방법 제공

HTTP 메서드 수단으로 이용
GET 데이터 조회
POST 데이터 등록 및 전송
PUT 데이터 수정
DELETE 데이터 삭제
*/