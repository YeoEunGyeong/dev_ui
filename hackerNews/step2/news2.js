var requestOptions = {
  //news
  method: "GET",
  redirect: "follow",
};
var requestOptions2 = {
  //content
  method: "GET",
  redirect: "follow",
};
const NEWSURL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENTURL = "https://api.hnpwa.com/v0/item/@id.json";

// 제목을 클릭했을 때 보여 줄 다중 댓글 출력위한 div 생성
const content = document.createElement("div");
// DOM API 단점 ; 구조가 직관적이지 않음

window.addEventListener("hashchange", () => {
  const id = this.location.hash.substr(1);

  fetch(CONTENTURL.replace("@id", id), requestOptions2) //content
    .then((response) => response.json())
    .then((result) => {
      // <div><h1></h1></div>
      const title = this.document.createElement("h1"); // DOM API <h1></h1>
      title.innerHTML = result.title;
      // 15열에서 생성한 div 태그 넣기
      content.appendChild(title); // DOM API 라우팅(한 화면에 모두 보임 ; SPA(React)) 기능 구현 불가
    })
    .catch((error) => console.log("error", error));
});

fetch(NEWSURL, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const news = result;
    const ul = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
    <li>
      <a href = '#${news[i].id}'>
        ${news[i].title}("350")
      </a>
    </li>s
    `;
      ul.appendChild(div.firstElementChild);
    }
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(content);
  })

  .catch((error) => console.log("error", error));
