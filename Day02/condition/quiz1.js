const bus = {
  bus1: [
    { name: "마을버스", price: 1500 },
    { name: "시내버스", price: 2000 },
    { name: "고속버스", price: 8000 },
    { name: "시외버스", price: 10000 },
  ],

  region: [
    { name: "경기권", price: 2000 },
    { name: "충천권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
  seat: [
    { name: "Standard", price: 1000 },
    { name: "Premium", price: 3000 },
    { name: "Netfilx", price: 4000 },
  ],
};
const busChoose = Number(
  prompt(
    `${bus.bus1[0].name},${bus.bus1[1].name},${bus.bus1[2].name},${bus.bus1[3].name}고르시오`
  )
);
const regionChoose = Number(
  prompt(
    `${bus.region[0].name},${bus.region[1].name},${bus.region[2].name},${bus.region[3].name}고르시오`
  )
);
const seatChoose = Number(
  prompt(`${bus.seat[0].name},${bus.seat[1].name},${bus.seat[2].name}고르시오`)
);
const age = Number(prompt("몇 살?"));
const total =
  bus.bus1[busChoose].price +
  bus.region[regionChoose].price +
  bus.seat[seatChoose].price;

if (age <= 13) {
  console.log(
    `${bus.bus1[busChoose].name},${bus.region[regionChoose].name},${
      bus.seat[seatChoose].name
    }의 총 금액 : ${total * 0.8}입니다.`
  );
} else if (age >= 65) {
  console.log(
    `${bus.bus1[busChoose].name},${bus.region[regionChoose].name},${
      bus.seat[seatChoose].name
    }의 총 금액 : ${total * 0.5}입니다.`
  );
} else {
  const total = console.log(
    `${bus.bus1[busChoose].name},${bus.region[regionChoose].name},${
      bus.seat[seatChoose].name
    }의 총 금액 : ${total * 1}입니다.`
  );
}
