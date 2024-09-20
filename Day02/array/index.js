//참조 타입 array
//시작 : 0부터 시작
// const paik = ["아메리카노", "라떼", "모카", "바닐라"];

// console.log(paik[2]);

const bread = ["플랫", "화이트", "위트"];
const cheese = ["슈레드", "모짜렐라", "아메리칸"];
const sauce = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie = ["화이트", "초콜릿", "아몬드"];
const drink = ["콜라", "제로콜라", "스프라이트", "닥터페퍼"];

console.log(
  `최종 메뉴는 ${bread[Number(prompt("빵 메뉴: 0.플랫 1.화이트 2.위트"))]}-${
    cheese[Number(prompt("치즈메뉴: 0.슈레드 1.모짜렐라 2.아메리칸"))]
  }-${
    sauce[
      Number(prompt("소스: 0.머스타드 1.핫칠리 2.소금 3.후추 4.스언 5.홀레"))
    ]
  }-${cookie[Number(prompt("쿠키: 0.화이트 1.초콜릿 2.아몬드"))]}-${
    drink[Number(prompt("음료: 0.콜라 1.제로콜라 2.스프라이트 3.닥터페퍼"))]
  }`
);
