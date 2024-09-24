/* const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x % 3 == 0;
});
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x >= 4 && x <= 8;
});
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

const f1 = fruitArray.filter((x) => {
  return x.includes("o");
});
const f2 = fruitArray.filter((x) => {
  return x.length >= 6;
});

const f3 = fruitArray
  .filter((x) => {
    return x.length % 2 == 0;
  })
  .map((x) => {
    return x.toUpperCase();
  });

console.log(num);
console.log(num1);
console.log(f1);
console.log(f2);
console.log(f3);
 */

/* const arr = (n, k) => {
  return Array(n)
    .fill(0)
    .map((x, i) => {
      return i + 1;
    })
    .filter((x) => {
      return x % k == 0;
    });
};

console.log(arr(20, 3));
 */

/* const todolist = ["점심먹기", "복습하기", "유튜브보기", "카톡보기"];
const finished = [false, false, true, true];

const newTodolist = (todd, finish) => {
  return todo.filter((x, i) => {
    return !finish[i];
  });
};

console.log(newTodolist); */

/* const text2 = (word) => word.split("x").map((x) => x.length);
console.log(text2); */

/* const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
const vowels = ["a", "e", "i", "o", "u"];

const arr = fruits.map((x) =>
  x.split("").map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
);
console.log(arr); */

//알고리즘 문제 풀떄 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 ㄱㄱ
const arr = Array(100)
  .fill(1)
  .map((x, i) => String(i + 1))
  .map((x) => (x.includes(3) || x.includes(6) || x.includes(9) ? "👏" : x));

console.log(arr);
