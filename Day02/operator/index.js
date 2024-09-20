//산술 연산자(+,-,*,**,/,%)
const a = 1 + 1;
const b = 10 - 1;
const c = 1 * 2;
const d = 2 ** 3; //제곱 연산자
const e = 6 / 2;
const f = 8 % 3; //나머지 연산자
const i = -10; //부호반대 연산자
const g = "치즈" + "떡볶이"; // 문자열 연결 연산자
const h = 10 + "인분"; // 암묵적 타입변환 + 문자열 연결 연산자

//대입 연산자
const j = "배그";
const a1 = b + "고인물 겜";

//비교 연산자(>,<,<=,>=,==,!=,===)
const a2 = 5 > 3; //true
const a3 = 5 < 3; //false
const a4 = 5 >= 3; //true
const a5 = 5 <= 3; //false
const a6 = 1 == 1; //true
const a7 = 1 != 1; //false
const a8 = 1 === 1; //true(타입도 동일한지)
const a9 = 1 !== 1; //false(타입도 다른지)

//논리 연산자(&&,||,!)
const b1 = 5 > 1 && 3 > 1; //true
const b2 = 5 > 1 && 5 < 1; //false

const c1 = 5 < 1 || 3 < 1 || 1 == 1; //true

//not

const c2 = !false; //true
const c3 = !!false; //false
const c4 = !"장원영"; // false 암묵적 논리화임
const c5 = !(5 > 3 && 3 > 1); // false

// 삼항 연산자
const d1 = 10 > 5 ? "아이유" : "윤하";
const d2 = 3 < 1 ? "혜리" : "덕선";
