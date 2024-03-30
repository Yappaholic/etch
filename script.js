const container = document.getElementById("container");
function createGrid(x) {
 for (let i = 0; i < x; i++) {
  for (let j = 0; j < x; j++) {
    const cell = document.createElement("div");
    cell.classList.toggle("cell");
    container.appendChild(cell);
  };
}; 
};
createGrid(16)
const box = document.querySelectorAll(".cell");
for (let i = 0; i < box.length; i++) {
 box[i].addEventListener("mouseover", () => {
    box[i].classList.remove("cell");
    box[i].classList.add("hover");
  });
};

