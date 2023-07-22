
const nav = getNode('.nav');
const visualImage = getNode('.visual img');
const nickName = getNode('.nickName');
const bgc = getNode('body')

function handleSlider(e){
  e.preventDefault();
  
  const target = e.target.closest('li');
  
  
  if(!target) return;
  
  
  const list = getNodes('nav li');
  const index = attr(target, 'data-index');

  list.forEach((li)=>{                        
    removeClass(li, 'is-active');
    })


  addClass(target,'is-active')

  
  attr(visualImage,'src',`./assets/${data[index -1].name}.jpeg`)
  attr(visualImage,'alt',data[index-1].alt)
  
  bgc.style.background = `linear-gradient(to bottom, ${data[index -1].color[0]},${data[index -1].color[1]})`;

  nickName.textContent = `${data[index - 1].name}`;
  // 바꿔줄노드.textContext = 바꿔줄 내용
}
nav.addEventListener('click',handleSlider);
// 1. 클릭 이벤트 활성화
// 2. nav 클릭시 배경 색상 변경
// 3. 이미지 변경
// 4. 텍스트 변경
// 5. 함수 분리

// */











