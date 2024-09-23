const arr = ["Samsung", "LG", "Apple", "Google"];

arr.push("Hyundai");
arr.unshift("Hybe");
arr.pop();
arr.shift();
arr.reverse();
arr.indexOf("LG");
arr.indexOf("Totota");
arr.includes("Google");

const news = prompt("뉴스 기사를 입력 받으세요");
const news2 = prompt("찾을 단어를 입력하세요");
const words = news.split("");
const word = words.includes(news2)
  ? "찾는 단어가 있습니다."
  : "찾는 단어가 없습니다.";
alert(word);
