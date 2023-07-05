// 1. json 파일 불러오기
// 2. 불러온 데이터를 n개씩 잘라서 변수에 저장
// 3. each를 통해 html 가공하기
// 4. 가공한 html를 배열에 넣기
// 5. 배열을 출력하기
// 6. 출력된 동영상과 총 동영상의 개수가 같아지면 버튼 비활성화하기

// jQuery
let container = $('.gallery-wrap');
let loadMoreBtn = $('.loadMoreBt');

let addItemCount = 3;
let added = 0;
let allData = [];
let ItemHTML;

$.getJSON('./data/video.json', function (data) {
  allData = data;
  console.log("🚀 ~ file: data.js:14 ~ loadMoreBtn.click ~ addItemCount:", addItemCount)
  addItem();
  loadMoreBtn.click(addItem)
})

function addItem(data) {
  let element = [];
  let slicedData;
  // .slice( start [, end ] )
  slicedData = allData.slice(added, added += addItemCount)

  $.each(slicedData, function (idx, item) {
      ItemHTML = `
      <li class = "Gallery-item">
      <div>
      <a href="javascript:" class="galleryBt">
      <span class="gallery-video">
      <video src="${item.video}" autoplay muted loop></video>
      </span>
      <span class="galleryCap"></span>
      <span class="gallery-title">
      <span><strong>${item.title}</strong></span>
      <span><b>${item.description}</b></span>
      <span><i class="exploreBt">Explore</i></span>
      </span>
      </a>
      </div>
      </li>
      `
    // $(ItemHTML).get(0)는 jQuery 객체의 첫 번째 요소를 가져옵니다. 
    element.push($(ItemHTML).get(0))

    if (added < allData.length) {
      loadMoreBtn.text('Load More')
    } else {
      loadMoreBtn.text('End')
    }
  })

  container.append(element)
}

// Javascript
/* const container = document.querySelector('.gallery-wrap');
const loadMoreBtn = document.querySelector('.loadMoreBt');

let addItemCount = 3;
let added = 0;
let allData = [];
let ItemHTML;

fetch('./data/video.json')
  .then(response => response.json())
  .then(data => {
    allData = data;
    addItem();
    loadMoreBtn.addEventListener('click', addItem);
  });

function addItem() {
  const element = [];
  const slicedData = allData.slice(added, added += addItemCount);

  slicedData.forEach(item => {
    ItemHTML = `
      <li class="Gallery-item">
        <div>
          <a href="javascript:" class="galleryBt">
            <span class="gallery-video">
              <video src="${item.video}" autoplay muted loop></video>
            </span>
            <span class="galleryCap"></span>
            <span class="gallery-title">
              <span><strong>${item.title}</strong></span>
              <span><b>${item.description}</b></span>
              <span><i class="exploreBt">Explore</i></span>
            </span>
          </a>
        </div>
      </li>
    `;
    const tempElement = document.createElement('div');
    // 문자열 좌우에서 공백을 제거하는 함수가 trim() 함수
    tempElement.innerHTML = ItemHTML.trim();
    const itemElement = tempElement.firstChild;
    element.push(itemElement);
  });

  element.forEach(item => {
    container.appendChild(item);
  });

  if (added >= allData.length) {
    loadMoreBtn.style.display = 'none';
  }
}
 */