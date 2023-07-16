
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

 //   - false면 해당 input에 is--invalid 추가
//node.classList.remove('is--invalid')

//  - true면 해당 input에 is--invalid 제거
//node.classList.add('is--invalid')
      
function master() {
  
  let idInput = document.querySelector("#userEmail");
  let pwInput = document.querySelector("#userPassword");

 
  if (!idValidation(idInput)) {
    return;
  }
  if (!pwValidation(pwInput)) {
    return;
  }
  btnClick(idInput, pwInput)
}


function idValidation(idInput) {
  
  if (!emailReg(idInput.value)) {
    idInput.classList.add('is--invalid')
    return;
  }else{
    idInput.classList.remove('is--invalid')
    return true;
  }
}

//   - false면 해당 input에 is--invalid 추가
//node.classList.remove('is--invalid')


//  - true면 해당 input에 is--invalid 제거
//node.classList.add('is--invalid')
  
function pwValidation(pwInput) {
  
  if (!pwReg(pwInput.value)) {
    pwInput.classList.add('is--invalid')
    return;
  }else{
    pwInput.classList.remove('is--invalid')
    return true;
  }
}



//로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
// value === user.id
function btnClick(idInput, pwInput) {
  if (idInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html'
  } else if (idInput.value === user.id || pwInput.value === user.pw){
    
    alert('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요 ')
  }

 }     


//로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
// value === user.pw


// 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동



function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











