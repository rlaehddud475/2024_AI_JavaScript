/* const square = (x) => {
  return x ** 2;
};

const multiple = (x) => {
  return x % 2 == 1 ? x ** 2 : x ** 3;
};
const fruit = (x) => {
  return x <= 3 ? "🍒" : "🍉";
};

const num1 = [1, 2, 3, 4, 5].map(square);
const num2 = [1, 2, 3, 4, 5].map(multiple);
const num3 = [1, 2, 3, 4, 5].map(fruit);

console.log(num1);
console.log(num2);
console.log(num3);

const fruitArray = [
  "watermelon",
  "cherrt",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];

const le = (x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
};

const cast = (x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
};

const change = (x) => {
  return x.replaceAll("a", "🍒");
};

console.log(fruitArray.map(le));
console.log(fruitArray.map(cast));
console.log(fruitArray.map(change)); */

const starbucks = [
  {
    name: "americano",
    price: 4500,
    shots: 2,
    ingredients: ["water", "bean"],
  },
  {
    name: "latte",
    price: 6000,
    shots: 2,
    ingredients: ["milk", "bean"],
  },
  {
    name: "javachip",
    price: 4000,
    shots: 2,
    ingredients: ["milk", "wheat", "bean"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["water", "grapefruit", "source"],
  },
];

const post = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
const doyou = starbucks.map((x) => {
  x.ingredients.push("soy milk");
  return x;
});
const ame = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots;
    +1;
    return x;
  }
  return x;
});
const inplation = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
console.log(post);
console.log(doyou);
console.log(ame);
console.log(inplation);
