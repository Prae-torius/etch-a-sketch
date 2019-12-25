// Global variables

const container = document.querySelector("#container");
const contWidth = container.offsetWidth;
const contHeight = container.offsetHeight;

// Create grid of div elements at specified dimension 960px by 960px
function createGrid(pixelRow) {
  const totalGrid = pixelRow * pixelRow;
  const divWidth = contWidth / pixelRow + "px";
  const divHeight = contWidth / pixelRow + "px";

  container.style.gridTemplateColumns = `repeat(${pixelRow}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${pixelRow}, 1fr)`;

  for (let i = 0; i < totalGrid; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = divWidth;
    div.style.height = divHeight;
    container.appendChild(div);
  }
}

function onHover() {
  const divGrid = document.querySelectorAll(".grid");

  divGrid.forEach(div => {
    div.addEventListener("mouseover", e => {
      e.target.classList.add("hover");
    });
  });
}

// Resizes grid by quering for number of divs, reinitializes function calls

function resizeGrid() {
  const button = document.querySelector("#resize");
  const divGrid = document.querySelectorAll(".grid");

  button.addEventListener("click", e => {
    divGrid.forEach(div => {
      container.removeChild(div);
    });
    createGrid(prompt("Input new grid size"));
    onHover();
    resizeGrid();
  });
}

// Initial function calls

createGrid(16);
resizeGrid();
onHover();
