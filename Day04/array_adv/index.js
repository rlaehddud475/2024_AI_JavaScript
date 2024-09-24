//filter:걸러줘 어떠한 조건에 부합하는 요소만 남겨줘

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});
[10, 20, 30, 40, 50].filter((x) => {
  return 20 == x || x == 40;
});

// every : 어떠한 조건에 모든요소가 부함하누?

[10, 20, 30, 40, 50].every((x) => {
  return x > 10;
});

//some: 어떠한 조건에 하나 요소가 부적합함?
[10, 20, 30, 40, 50].some((x) => {
  return x > 60;
});

Array(100)
  .fill(1)
  .map((x, i) => {
    return x + 1;
  });

Array(10).fill(10);

Array(20)
  .fill(0)
  .map((x, i) => {
    return i;
  });

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => {
  const a = "123";
  return x * y;
};
