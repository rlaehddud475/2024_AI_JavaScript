//조건문(조건에 부합하면 실행되는 코드)
/* const num = Number(prompt("숫자 입력"));
if (num > 0) {
  console.log("입력한 값은 양수임");
} else if (num === 0) {
  console.log("0이 올시다");
} else {
  console.log("입력한 값은 음수임");
}
console.log("프로그램을 종료합니다.");

const mat = Number(prompt("수학점수 입력"));

if (mat >= 90) {
  console.log("A학점");
} else if (mat >= 80) {
  console.log("B학점");
} else if (mat >= 70) {
  console.log("C학점");
} else if (mat >= 60) {
  console.log("D학점");
} else {    
  console.log("수강 철회하고 군대난 가쇼");
} */

const n = Number(prompt("숫자를 입력하쇼"));
if (n > 0 && n % 2 == 1) {
  console.log("양의 홀수");
} else if (n > 0 && n % 2 == 0) {
  console.log("양의짝수");
} else if (n < 0 && n % 2 == 1) {
  console.log("음의 홀수");
} else if (n < 0 && n % 2 == 0) {
  console.log("음의짝수");
}
