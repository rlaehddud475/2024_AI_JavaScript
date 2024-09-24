const add = (x) => {
  return x <= 30 ? x + 100 : x + 200;
};
const num = [10, 20, 30, 40, 50].map(add);
console.log(num);

const cafe = (x) => {
  return x.length <= 5 ? x.toUpperCase() : "☕";
};
const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"].map(
  cafe
);
console.log(coffee);
