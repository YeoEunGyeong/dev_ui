const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
xhr.open("GET", NEWS, false);
xhr.send();

const news = JSON.parse(xhr.responseText);
console.log(news);
// let element = document.createElement(tagName[, options])
const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  // 8열에서 생성한 ul 태그 안에 li 태그를 배열 길이만큼 반복
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.innerHTML = `${news[i].title}(${news[i].comments_count})`;
  // 11열에서 생성한 li는 ul 태그 하위 태그 ; appendChild
  li.appendChild(a);
  ul.appendChild(li);
} // end for
console.log(ul);
document.querySelector("#title").appendChild(ul);

//console.log(news[0].title);
//console.log(news[1].title);
//console.log(news[2].title);

// console.log(xhr.responseText);
// document는 index.html전체를 받는 객체이므로 js에서 사용불가
// document.write(xhr.responseText)

// dic HTMLElement받기
//const title = document.querySelector("#title");
// 요청으로 반환되는 타입은 text 즉 문자열이므로 JSON.stringify는 사용 필요 없음
// 이미 문자열이니까 JSON.parse사용해서 구조를 분해함
// title.innerText = xhr.responseText;
// console.log(title);
