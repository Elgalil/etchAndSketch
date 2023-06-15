const grid = document.querySelector(".grid");
const customGenerateButton = document.querySelector(".customGenerateButton");
const erase = document.querySelector(".erase");
let defaultGridSize = 16;

const generateGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const newGridItem = document.createElement("div");
    grid.appendChild(newGridItem).addEventListener("mouseover", (event) => {
      event.currentTarget.style.backgroundColor = generateRandomColor();
    });
  }
};

generateGrid(defaultGridSize);

const customGrid = () => {
  let customGridAmount = prompt("How many grid items do you want?");
  grid.innerHTML = "";
  generateGrid(customGridAmount);
};

customGenerateButton.addEventListener("click", customGrid);
erase.addEventListener("click", (event) => {
  grid.innerHTML = "";
  generateGrid(defaultGridSize);
});

function generateRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
