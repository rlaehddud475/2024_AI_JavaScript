/* const movies = ["베테랑2", "에어리언", "사랑의 하츄핑"];
const seat = [
  {
    name: "standard",
    price: 10000,
  },
  {
    name: "couple",
    price: 20000,
  },
  {
    name: "premium",
    price: 15000,
  },
  {
    name: "economy",
    price: 8000,
  },
];
const popcorn = [
  {
    name: "일반",
    price: 6000,
  },
  {
    name: "캬라멜",
    price: 6500,
  },
  {
    name: "치즈",
    price: 6500,
  },
  {
    name: "반반",
    price: 7000,
  },
];

const drink = [
  {
    name: "탄산",
    price: 2000,
  },
  {
    name: "에이드",
    price: 3000,
  },
  {
    name: "커피",
    price: 3000,
  },
];
const seat1 = Number(prompt("좌석을 선택해주세요"));
const popcorn1 = Number(prompt("팝콘을 선택하세요"));
const drink1 = Number(prompt("음료를 선택하세요"));
const age = Number(prompt("나이를 입력하시요"));
const total = seat[seat1].price + popcorn[popcorn1].price + drink[drink1].price;
const sell = seat[seat1].price / 0.7;
const sell1 = seat[seat1].price / 0.8;

if (age <= 13) {
  console.log(`영화,좌석,팝콘,음료 총 금액:${parseInt(total - sell)}입니다.`);
} else if (age >= 60) {
  console.log(`영화,좌석,팝콘,음료 총 금액:${parseInt(total - sell1)}입니다.`);
} else {
  console.log(`영화,좌석,팝콘,음료 총 금액:${total}입니다.`);
}
 */

const movie = {
  name: ["베태랑2", "에일리언", "사랑의하츄핑"],
  seat: [
    { name: "Standard", price: 10000 },
    { name: "Couple", price: 20000 },
    { name: "Premium", price: 15000 },
    { name: "Economy", price: 8000 },
  ],
};
const shop = {
  prpcorn: [
    { name: "일반팝콘", price: 6000 },
    { name: "캬라멜팝콘", price: 6500 },
    { name: "치즈 팝콘", price: 6500 },
    { name: "반반팝콘", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const movieChoose = Number(prompt(`${movie.name}중 영화를 고르세요(0~2)`));
const seatChoose = Number(
  prompt(
    `${movie.seat[0].name}${movie.seat[1].name}${movie.seat[2].name}${movie.seat[3].name}중 영화를 고르세요`
  )
);
const popcornChoose = Number(
  prompt(
    `${shop.prpcorn[0].name}${shop.prpcorn[1].name}${shop.prpcorn[2].name}${shop.prpcorn[3].name}중 영화를 고르세요`
  )
);
const beverageChoose = Number(
  prompt(
    `${shop.beverage[0].name}${shop.beverage[1].name}${shop.beverage[2].name}중 영화를 고르세요`
  )
);
const age = Number(prompt("나이 몇 살?"));
const msg = `${movie.name[movieChoose]},${movie.seat[seatChoose].name},${shop.prpcorn[popcornChoose].name},${shop.beverage[beverageChoose].name}`;

const total =
  movie.seat[seatChoose].price +
  shop.prpcorn[popcornChoose].price +
  shop.beverage[beverageChoose].price;

if (age <= 13) {
  const total =
    movie.seat[seatChoose].price * 0.7 +
    shop.prpcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총금액 : ${total}입니다`);
} else if (age >= 60) {
  const total =
    movie.seat[seatChoose].price * 0.8 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총금액 : ${total}입니다`);
} else {
  const total =
    movie.seat[seatChoose].price * 1 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총금액 : ${total}입니다`);
}
