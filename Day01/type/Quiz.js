// const a = prompt("첫 번째 숫자 입력");
// const b = prompt("두 번째 숫자 입력");
// const result = Number(a) + Number(b);
// console.log(`두 수의 합은 ${result}입니다.`);

const square = Number(prompt("한 변의 길이는?"));
console.log(`둘레는 ${square * 4}`);
console.log(`넓이는 ${square * square}`);

const triangle = Number(prompt("밑변 길이는?"));
const triangle2 = Number(prompt("높이는?"));
console.log(`넓이는  ${(triangle * triangle2) / 2}`);

const round = Number(prompt("반지름은?"));
console.log(`둘레는 ${2 * round * 3.14} 넓이는${round * round * 3.14}`);

const age = Number(prompt("출생연도는?"));
console.log(`나이는 ${2024 - age}`);

const won = Number(prompt("얼마를 환전할 건가요?"));
const an = 0.1075;
console.log(`현제 한화로 ${won}만큼 환전하면 ${won * an}엔 입니다.`);
