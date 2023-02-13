import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.getGoogleAuthProvider;
  };
} // end authLogic

// 크롬에서 서비스 사용 시 로그인 정보 수정될 때 적용되는 콜백 코드
// 상태가 바뀔 때마다 자동으로 호출
// 개발자가 호출하는 함수 아님
export const onAuthChange = () => {
    return new Promise((reslove) => {
        auth.onAuthStateChanged((user) => {
            reslove(user);
    });
});
};
export const loginGoogle = (auth, googleProvider) => { // 로그인 함수
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider).then(
      (result) => { // result에는 구글 서버에서 전달해 준 사용자 이름
        const user = result.user
        console.log(user); // json형식
        resolve(user)
      }).catch(e => reject(e))
  })
  //console.log('providerName : '+ providerName);
  const authProvider = this.getProvider(providerName); // 구글인지 깃허브인지 문자열 정보 가져옴
  //console.log('authProvider : '+ authProvider);
  //console.log('this.firebaseAuth : '+ this.firebaseAuth);
  //return signInWithPopup(this.firebaseAuth, authProvider);
  return signInWithPopup(this.firebaseAuth, authProvider);
} // end Google

export const logout = (auth) => {
    return new Promise((reslove, reject) => {
        auth.sighOut().catch((e) => reject(alert(e + " : 로그아웃 오류")));
        reslove();
    });
};

export default AuthLogic;

/* 
package.json에는 의존 관계 라이브러리 등록
(개발자 의존 - D - 실제 운영 서버에는 미배포, 배포용)

외부 스크립트 사용 방법
1 commonjs 디폴트(생략되어 있음 package.json > npm init -y)
const http = requires('http')

2 module
import {...} from './XXX.js'

리액트 수업 공통 사항
authLogic.js 리액트 수업 활용

export ; 여러개 가능 {}
export dafault ; 하나만 가능

호이스팅 대상 3가지 가장 먼저 실행
이것을 지연시키는 예약어 ; defer 다운로드가 끝나고 브라우저가 DOM Tree를 그릴 때까지 지연
→ DOM Tree가 완성되면 DOM API 사용 가능 document.querySeletor()/ document.querySeletorAll => []
브라우저는 같은 이름이 두 개 이상이면 자동으로 배열 전환

서버에서 다운 받으려면 시간 걸림 > 비동기처리 발생(지연 발생)
따로 처리하다가 먼저 처리가 되면 then(() => {})

checkbox name = hobby 배열 > 데이터셋과 직결 json
const temp = JSON.stringify(respeonse.json()) ; 객체 → 문자열 
const jsonDoc = JSON.parse(temp) ; 문자열 → 배열
jsonDoc[].XXXX

mime type
; 서로 호환 불가
text/javascript > import, require ERROR!
,text/module > import
,text/common > require
 */