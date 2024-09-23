function sniffling(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

function multiple(x) {
  return x % 5 == 0 ? "5의 배수임" : "5의 배수 아님";
}

function popcorn(x) {
  if (x == 1) {
    return "일반팝콘";
  } else if (x == 2) {
    return "캬라멜팝콘";
  } else if (x == 3) {
    return "치즈팝콘";
  } else {
    return "딴 팝콘은 없음";
  }
}
function popcorn2(x) {
  return `${x} 팝콘`;
}
const a = ice("민트");
console.log(a);

function str(x, y, z) {
  return [x, y, z];
}

function ice(x) {
  return `${x}맛 아이스크림`;
}

function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven(x) {
  return x % 2 == 1;
}
