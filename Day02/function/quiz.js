function hello(x) {
  return "hollo" + x + "님!";
}

function ping(x) {
  return x + "핑";
}

function luck(x) {
  return x + "라니 럭키비키잖아";
}

function exponentiation(x, y) {
  return x ** y;
}

function today(x, y, z) {
  return "오늘은" + x + "년도" + y + "월" + z + "일";
}

function mbti(a, b, c, d) {
  const mbtimap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이성적",
    f: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtimap[a]},${mbtimap[b]},${mbtimap[c]},${mbtimap[d]}이시군요!`;
}

function zodiac(year) {
  const target = year % 12;
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[target]}띠`;
}

hello("kdy");
ping("지랄");
luck("병신");
today(2024, 9, 20);
mbti(i, n, f, p);
