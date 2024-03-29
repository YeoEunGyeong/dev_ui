const ajax = new XMLHttpRequest();
// 문자열로 처리하는 경우 훨씬 더 직관적
// ; 정적, 고정적, 결정된 상태
// 배열은 덜하다 하지만 배열을 사용하는 이유 ???
// ; 동적, 
const videoList = []; // 원소가 늘어나는 것이지 값이 변화하지 않기 때문에 const
const key = "AIzaSyC0M0w2uhDKdg8Sb04Q0QeLgQhAFfFnn1o";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length); // 25
videoList.push(`<ul class = "videos"`);
for (let i = 0; i < items.length; i++) {
  // 25번 반복
  /*     console.log(items[i].snippet.thumbnails.medium.url);
    console.log("내용:" + items[i].snippet.description);
    console.log("제목:" + items[i].snippet.title); */
  videoList.push(`<li class = "container">`);
  videoList.push(`<div class = "video">`);
  videoList.push(
    `<img class = "thumbnail" src = "${items[i].snippet.thumbnails.medium.url}">`
  );
  videoList.push(`<div>`);
  videoList.push(`<p class = "title"> ${items[i].snippet.title}</p>`);
  videoList.push(
    `<p class = "channelTitle"> ${items[i].snippet.channelTitle}</p>`
  );
  videoList.push(`</div>`);
  videoList.push(`</div>`);
  videoList.push(`</li>`);
}
videoList.push(`</ul>`);
document.querySelector("#root").innerHTML = videoList.join("");
