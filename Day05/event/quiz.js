/* const order = document.createElement("button");
order.innerText = "아메리카노";
order.addEventListener("click", () => {
  order.innerText = "주문완료";
});
document.body.appendChild(order);

const change = document.createElement("button");
change.style.backgroundColor = "skyblue";
change.addEventListener("click", () => {
  change.style.backgroundColor = "pink";
});
document.body.appendChild(change);
 */

const main = document.createElement("main");
const pallet = document.createElement("section");
const box = document.createElement("div");

const color = [
  { color: "blue", name: "blue" },
  { color: "yellow", name: "yellow" },
  { color: "green", name: "green" },
  { color: "gray", name: "gray" },
  { color: "pink", name: "pink" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.style.backgroundColor = v.color;
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.border = "1px solid black";
  button.addEventListener("click", () => {
    box.style.backgroundColor = v.color;
  });
  pallet.appendChild(button);
  pallet.appendChild(box);
});
main.appendChild(pallet);
document.body.appendChild(main);

[
  { name: "[네모]", radius: "0px" },
  { name: "[둥글게]", radius: "999px" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.addEventListener("click", () => {
    box.style.borderRadius = v.radius;
  });
  document.body.appendChild(button);
});

document.body.appendChild(box);
