const container = document.getElementById("container");
const width = 700
const btn = document.querySelector("#btn")
function createGrid(x) {
 for (let i = 0; i < x; i++) {
  for (let j = 0; j < x; j++) {
    const cell = document.createElement("div");
    cell.classList.toggle("cell");
    let resolution = width / x  
    container.appendChild(cell);
  };
};
  hover()
 };
function hover() {
 const box = document.querySelectorAll(".cell");
 for (let i = 0; i < box.length; i++) {
 box[i].addEventListener("mouseover", () => {
    box[i].classList.remove("cell");
    box[i].classList.add("hover");
  });
};
 
}

function removeGrid() {
  const row = document.querySelectorAll("#container > div")
  for (let i = 0; i < row.length; i++) {
    row[i].remove()
  }
};

btn.addEventListener("click", () => {
  let ask = prompt("Choose grid size (max 100)")
  removeGrid()
  createGrid(ask)
});
createGrid(20)
