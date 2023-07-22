# 멋쟁이 사차처럼 6기🦁

## Mission-02

### 💡프로젝트명: 자바스크립트 두번째 과제❗

썸네일 이미지를 클릭하면 메인 이미지와 배경의 색상이 바뀔 수 있도록 자바스크립트 코드 를 작성합니다.

## ✍stack

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

```
const nav = getNode('.nav');
const visualImage = getNode('.visual img');
const nickName = getNode('.nickName');
const bgc = getNode('body')

//getNode를 이용하였습니다.

function handleSlider(e){
  e.preventDefault();
// li의 이미지를 클릭했을 때 페이지가 이동되지 않게 합니다.

  const target = e.target.closest('li');
  //이미지 어디를 클릭하든 li를 반환하게 합니다.

  if(!target) return;
  // target 값이 없으면 (잘못 클릭하면) 함수를 종료합니다.

  const list = getNodes('nav li');
  // nav 안의 모든 li 수집하기 위에 코드를 작성하였습니다.

  const index = attr(target, 'data-index');
  //클릭한 이미지의 data-index를 가져옵니다.

  list.forEach((li)=>{
    removeClass(li, 'is-active');
    })
  //모든 li의 is-active 클래스를 지웁니다.

  addClass(target,'is-active')
  //내가 선택한 태그(이미지)에만 is-active 클래스 추가하기 위해 작성하였습니다.

  attr(visualImage,'src',`./assets/${data[index -1].name}.jpeg`)
  // 배열의 인덱스는 0부터 시작이기 때문에 -1을 해줘야 합니다.

  attr(visualImage,'alt',data[index-1].alt)
  //클릭하는 이미지를 썸네일로 바꾸기 위해 작성하였습니다.

  bgc.style.background = `linear-gradient(to bottom, ${data[index -1].color[0]},${data[index -1].color[1]})`;
  //각 썸네일 마다 배경색을 바꿔주기 위해 작성하였습니다.

  nickName.textContent = `${data[index - 1].name}`;
  // 바꿔줄노드.textContext = 바꿔줄 내용을 작성하여 썸네일 위의 이름을 바꿔줍니다.
}
nav.addEventListener('click',handleSlider);
```

## 🌳파일트리

📦mission02

┣ 📂client

┃ ┣ 📂assets

┃ ┃ ┣ 📂audio

┃ ┃ ┃ ┣ 📜clod.m4a

┃ ┃ ┃ ┣ 📜ember.m4a

┃ ┃ ┃ ┣ 📜gale.m4a

┃ ┃ ┃ ┗ 📜wade.m4a

┃ ┃ ┣ 📜clod.jpeg

┃ ┃ ┣ 📜ember.jpeg

┃ ┃ ┣ 📜gale.jpeg

┃ ┃ ┗ 📜wade.jpeg

┃ ┣ 📂css

┃ ┃ ┣ 📜reset.css

┃ ┃ ┗ 📜style.css

┃ ┣ 📂js

┃ ┃ ┣ 📜audio.js

┃ ┃ ┣ 📜data.js

┃ ┃ ┗ 📜main.js

┃ ┣ 📂lib

┃ ┃ ┗ 📂dom

┃ ┃ ┃ ┣ 📜attr.js

┃ ┃ ┃ ┣ 📜bindEvent.js

┃ ┃ ┃ ┣ 📜css.js

┃ ┃ ┃ ┣ 📜getNode.js

┃ ┃ ┃ ┗ 📜insert.js

┃ ┣ 📜index.html

┃ ┗ 📜README.md

┗ 📜.gitignore
