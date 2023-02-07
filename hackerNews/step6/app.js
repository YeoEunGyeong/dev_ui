const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title")
const divcontent = document.createElement("div")

// 아래 함수의 사용처는 두 곳
// 요청한 URL만 바뀌고 나머지는 동일(그래서 파라미터에 url)
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText)
}

const news = getData(NEWS)
const ul = document.createElement("ul");

// 이벤트 처리 추가
window.addEventListener("hashchange", function () {
  // console.log("해시 변경 완");
  // console.log(location.hash); // #값 표시
  const id = this.location.hash.substring(1);

  const newscontent = getData(CONTENT.replace("@id", id))
  const h1 = this.document.createElement("h1")
  container.innerHTML = `
  <h1>${newscontent.title}</h1>
  `; 
}); // end hashchange

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div')
  div.innerHTML = `
  <li>
    <a href = '#${news[i].id}'>
      ${news[i].title}(${news[i].comments_count})
    </a>
  </li>
  `
  ul.appendChild(div.firstElementChild);
} // end for

container.appendChild(ul);
container.appendChild(divcontent);