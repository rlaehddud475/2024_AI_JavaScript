// short circuit
const a = false || true;
const b = undefined || "자바스크립트";

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합네다`);

const c = true && "탕수육";
const d = false && "탕후루";

const isLoggin = prompt("비밀번호 입력하셈") == "1234";
isLoggin && alert("주인 ㅎㅇ");
