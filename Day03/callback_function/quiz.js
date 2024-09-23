const makeCoffee = (coffee) => {
  console.log("커피 준비");
  coffee();
  console.log("커피 준비 완료");
};

const americano = () => {
  console.log("원두 갈기");
  console.log("원두 내리기");
  console.log("물 넣기");
};
const latte = () => {
  console.log("원두 갈기");
  console.log("원두 내리기");
  console.log("우유 넣기");
};
const vanilla = () => {
  console.log("원두 갈기");
  console.log("원두 내리기");
  console.log("우유 넣기");
  console.log("바닐라 시럽넣기");
};

makeCoffee(vanilla);

makeCoffee(() => {
  console.log("원두 갈기");
  console.log("원두 내리기");
  console.log("망고를    컵에 넣기");
  console.log("샷 넣기");
  console.log("물 넣기");
});
