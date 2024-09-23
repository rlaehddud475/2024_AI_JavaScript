const pizza = "cheese pizza";

//포함
const hasCheese = pizza.includes("cheese");
const hasPine = pizza.includes("pineapple");
const hasC = pizza.includes("c");
const hasEE = pizza.includes("ee");

//몇번
const indexH = pizza.indexOf("h");
const indexB = pizza.indexOf("b");

pizza.replace("z", "k");
pizza.replaceAll("z", "k");

pizza.startsWith("pizza");
pizza.endsWith("pizza");

//대문자화 및 소문자화
pizza.toUpperCase();
pizza.toLowerCase();

//나누기
pizza.slice(0, 4);
//나누기[배열화]
pizza.split("i");
pizza.split(" ");
//반복
pizza.repeat(3);

pizza.length;
