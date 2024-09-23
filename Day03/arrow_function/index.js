//General Function[구문법]
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}

//arrow Functron[신문법]
const add1 = (x, y) => {
  return x + y;
};
const sub1 = (x, y) => {
  return x - y;
};

const ice = (x) => {
  return `${x}맛 아이스크림`;
};

const arr = (x, y, z) => {
  return [x, y, z];
};

const sni = (x) => {
  return x % 2 == 1 ? "홀수" : "짝수";
};
