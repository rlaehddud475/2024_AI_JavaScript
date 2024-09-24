const container = document.createElement("div");
container.classList.add("container");
/* [("red", "orange", "yellow", "green", "blue", "navy", "purple")].forEach(
  (v) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = v;
    container.appendChild(box);
  }
); */

const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

Array(2000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color[i % color.length];
    container.appendChild(box);
  });
document.body.appendChild(container);
