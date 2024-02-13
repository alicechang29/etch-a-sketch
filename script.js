//DOM setup
const menu = document.querySelector(".menu");
const gridContainer = document.querySelector(".gridContainer");
const sketchPad = document.querySelector(".gridScreen");

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Sketchpad";
resetButton.className = "resetButton";
menu.appendChild(resetButton);

const gridSizeInput = document.createElement("input");
gridSizeInput.setAttribute("type", "text");
gridSizeInput.className = "gridSizeInput";
gridSizeInput.textContent = "Set Grid Size to any value between 1 and 100.";
menu.appendChild(gridSizeInput);

//Functions
let gridSize = gridSizeInput.value;
function checkValidGridSize(gridSize) {
  if (isNaN(gridSize)) {
    alert("Please enter a valid number between 1 and 100.");
  }
}
const defaultRows = 16;
const defaultColumns = 16;

function createGrids(columns, rows) {
  for (let i = 0; i < columns; i++) {
    let column = document.createElement("div");
    column.classList.add("grid-column");
    for (let j = 0; j < rows; j++) {
      let gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      column.appendChild(gridCell);
    }
    sketchPad.appendChild(column);
  }
}
createGrids(defaultRows, defaultColumns);

function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    //html color codes are 6 letters long
    //concatenating on a value from letters onto the color variable
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function resetSketchPad() {
  const gridCells = document.querySelectorAll(".grid-cell");
  for (let i = 0; i < gridCells.length; i++) {
    let cell = gridCells[i];
    cell.style.backgroundColor = "white";
  }
  createGrids(defaultRows, defaultColumns);
}

//Event Listeners

//hover effect over the sketchpad
sketchPad.addEventListener(
  "mouseover",
  function (event) {
    // Check if the mouse is over a grid cell
    if (event.target.classList.contains("grid-cell")) {
      // Change the background color of the grid cell using the random color generator function
      event.target.style.backgroundColor = generateRandomColor();
    }
  },
  false
);

//reset the sketchpad
resetButton.addEventListener("click", function () {
  resetSketchPad();
});

//change grid size for the "Enter" key press on the input field
gridSizeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkValidGridSize(gridSize);
    createGrids(gridSizeInput.value, gridSizeInput.value);
  }
});

/*
Known Bugs 
- issue with generating user sized grids 
> number is added to the default grid size 

- resetting the grid 
> will add on default grid size to existing grids 

- input field is ugly 
*/
