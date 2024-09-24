/* const div = document.createElement("div");
div.innerText = "샤브샤브";
div.style.color = "red";
document.body.appendChild(div);*/

/* ["아메리카노", "에이드", "라뗴"].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v;
  button.style.backgroundColor = "skyblue";
  button.style.color = "white";
  document.body.appendChild(button);
});

[
  { name: "아메리카노", bg: "yellow", color: "block" },
  { name: "애이드", bg: "pink", color: "whith" },
  { name: "라떼", bg: "skyblue", color: "orange" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.style.backgroundColor = v.bg;
  button.style.color = v.color;
  document.body.appendChild(button);
}); */

const container = document.createElement("div");

container.classList.add("container");

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
