import {
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  class AuthLogic { // 객체 선언 ; 자바 스크립트에는 중복 선언 불가
    constructor() { // 익명 생성자
      this.firebaseAuth = getAuth(); // 구글에서 객체 주입
      this.googleProvider = new GoogleAuthProvider(); // 구글 지원 객체
      this.githubProvider = new GithubAuthProvider(); // 구글 github 지원 객체
    }
    login(providerName) { // 로그인 함수
      //console.log('providerName : '+ providerName);
      const authProvider = this.getProvider(providerName); // 구글인지 깃허브인지 문자열 정보 가져옴
      //console.log('authProvider : '+ authProvider);
      //console.log('this.firebaseAuth : '+ this.firebaseAuth);
      //return signInWithPopup(this.firebaseAuth, authProvider);
      return signInWithPopup(this.firebaseAuth, authProvider);
    }
    // 로그아웃 버튼이 눌리면 호출
    // export로 선언하는 이유 ?? 리액트에서는 한 페이지를 모듈화 시켜서 재사용성을
    // 높이는 방식이므로 어떤 컴포넌트에서든지 호출 가능하도록 설계 ; 함수를 !
    logout() {
      this.firebaseAuth.signOut();
    }
    // 호출 시 파라미터값에 따라 변경사항이 있을 때마다 자동 호출됨
    onAuthChange(onUserChanged) {
      // 구글에서 제공하는 함수 onAuthStateChanged
      this.firebaseAuth.onAuthStateChanged((user) => {
        onUserChanged(user);
      });
    }
    // 아래 파라미터로 Google / Github 받음
    getProvider(providerName) { // Google
      switch (providerName) {
        case "Google":
          return this.googleProvider;
        case "Github":
          return this.githubProvider;
        default:
          throw new Error(`not supported provider: ${providerName}`);
      }
    }
  }
  
  export default AuthLogic;