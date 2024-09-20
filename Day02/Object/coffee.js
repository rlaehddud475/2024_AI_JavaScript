const ediya = [
  {
    korName: "(L)달달커피",
    engName: "(L)Mixed coffee",
    exp: "살 준나 찌는 커피(먹을거면 아아나 믹스커피 타먹자)",
    kcal: 277,
    protein: 2,
    na: 39,
    sugar: 20,
    fat: 9,
    caffein: 236,
    allergy: ["우유"],
  },
  {
    korName: "팥인절미 1인빙수",
    engName: "Red Bean Injeolmi",
    exp: "설빙이 더쌈",
    kcal: 569,
    protein: 11,
    na: 218,
    sugar: 53,
    fat: 6,
    caffein: 0,
    allergy: ["우유", "대두"],
  },
];

const tag = document.createElement("div");

tag.innerHTML = `
    <h4 style="font-size:30px">${ediya[0].korName}</h4>
    <p style="color:grey">${ediya[0].exp}</p>
    <span>${
      ediya[0].kcal > 250 ? "살 존나 찜" : "다이어트 할때 가끔씩 드셔 "
    } kcal</span>
    `;

document.body.appendChild(tag);
