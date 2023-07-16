# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

# 코드 로직 작성을 하기 전에 할 일

### 1. 아이디 검사

### 2. 비밀번호 검사

### 3. 둘 다 통과 후 아이디 user id랑 비교

### 4. 비밀번호 user pw랑 비교

### 5. 둘 다 맞으면 페이지 이동

/\*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

\*/

### ID와 PW 선언

const user = {

id:'asd@naver.com',

pw:'spdlqj123!@'

}

// - false면 해당 input에 is--invalid 추가
//node.classList.remove('is--invalid')

// - true면 해당 input에 is--invalid 제거
//node.classList.add('is--invalid')

#

## master() 함수는 가장 큰 부모역할을 하는 함수입니다.

function master() {

let idInput = document.querySelector("#userEmail");

let pwInput = document.querySelector("#userPassword");

★ 아이디와 비밀번호를 선언하였습니다.

if (!idValidation(idInput)) {

return;

}

if (!pwValidation(pwInput)) {

return;

}

★ if문을 이용하여 유효성 검사를 할 때 !(부정)을 주고 유효성검사가 맞지 않다면 return을 주어 함수 동작을 중단시킵니다.

btnClick(idInput, pwInput)

}

★ btnClick 함수에서 매개변수인 idInput, pwInput를 실행시키기 위해 master에 넣어 전달인자로 넣었습니다.

#

## master함수에서 가져온 idValidation 함수입니다.

function idValidation(idInput) {

if (!emailReg(idInput.value)) {

idInput.classList.add('is--invalid')

★ 만약 emailReg에 적합하지 않다면 is--invalid 클래스를(이메일과 비밀번호의 형식을 맞춰주세요)

추가하는(add) 코드 입니다.

return;

★ emailReg에 적합하지 않다면 is--invalid 클래스를 추가하고 return;을 줌으로써

함수 종료 시켜 다음 동작을 수행하지 못하도록 합니다.

}else{

idInput.classList.remove('is--invalid')

return true;

★ emailReg에 적합하다면 remove를 이용해 is--invalid 클래스를 지웁니다.

}

}

#

# master함수에서 가져온 pwValidation 함수입니다.

function pwValidation(pwInput) {

if (!pwReg(pwInput.value)) {

pwInput.classList.add('is--invalid')

return;

}else{

pwInput.classList.remove('is--invalid')

return true;

}

}

#★ 위의 idValidation과 설명은 동일합니다.

#

## 로그인 버튼을 클릭시 값을 비교하는 btnClick 함수

//로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
value === user.id

//로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
value === user.pw

// 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

function btnClick(idInput, pwInput) {

★ btnClick을 선언하고 idInput, pwInput을 매개변수로 이용합니다.

master함수에서 전달인자로 쓰입니다.

if (idInput.value === user.id && pwInput.value === user.pw) {

★ &&연산이기 때문에 둘다 ===이 성립되어야

window.location.href = 'welcome.html'

★ 웰컴 홈페이지로 이동할 수 있습니다.

} else if (idInput.value === user.id || pwInput.value === user.pw){

    alert('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요 ')

}

}

function emailReg(text){
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return re.test(String(text).toLowerCase())
}

function pwReg(text){
const re = /^(?=._[a-zA-Z])(?=._[0-9])(?=._[!@#$%^_+=-]).{6,16}$/;
return re.test(String(text).toLowerCase());
}

---

- [o] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.
