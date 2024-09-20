const year = Number(prompt("출생 연도"));
const mag = year <= 2005 ? "성인입니다" : "미자입니다.";
console.log(mag);
const stature =
  Number(prompt("키 몇임?")) <= 150 ? "탈 수 없습니다." : "탈 수 있습니다.";
console.log(stature);
const count = Number(prompt("양의 정수를 입력하세요"));
const sec = count % 60;
const min = parseInt(count / 60);
console.log(`${min}분 ${sec} 초`);
