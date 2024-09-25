const main = document.createElement("main");
const section = document.createElement("section");
section.classList.add("container");
const color = ["blue", "navy", "purple", "black", "yellowgreen"];
Array(100)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color[i % color.length];
    section.appendChild(box);
  });
main.appendChild(section);
document.body.appendChild(main);
