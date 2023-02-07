const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const divcontent = document.createElement("div")

xhr.open("GET", NEWS, false);
xhr.send();

const news = JSON.parse(xhr.responseText);
const ul = document.createElement("ul");

// 이벤트 처리 추가
window.addEventListener("hashchange", function () {
  // console.log("해시 변경 완");
  // console.log(location.hash); // #값 표시
  const id = this.location.hash.substring(1);
  console.log("before : " + CONTENT);
  console.log("after : " + CONTENT.replace("@id", id));
  xhr.open("GET", CONTENT.replace("@id", id), false);
  xhr.send();

  const newscontent = JSON.parse(xhr.responseText)
  const h1 = this.document.createElement('h1')
  console.log(newscontent.title);
  h1.innerHTML = newscontent.title
  divcontent.appendChild(h1)
  //title.innerHTML = content.title
  //content.appendChild(title)
});
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${news[i].id}`;
  // 어떻게 클릭했는지 알 수 있었을까 ? a 태그에 href 확인
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
  li.appendChild(a);
  ul.appendChild(li);
} // end for

document.querySelector("#title").appendChild(ul);
document.querySelector("#title").appendChild(divcontent);
