//DOM setup
const menu = document.querySelector(".menu");
const gridContainer = document.querySelector(".gridContainer");
const sketchPad = document.querySelector(".gridScreen");

const gridSizeInput = document.createElement("input");
gridSizeInput.setAttribute("type", "text");
gridSizeInput.setAttribute("placeholder", "Set Grid Size(1-100)");
gridSizeInput.className = "gridSizeInput";
menu.appendChild(gridSizeInput);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Sketchpad";
resetButton.className = "resetButton";
menu.appendChild(resetButton);

//Functions
function checkValidGridSize(inputValue) {
  let size = Number(inputValue);
  if (size < 0 || size > 100 || isNaN(size)) {
    alert("Please enter a valid number between 1 and 100.");
    gridSizeInput.value = "";
    console.log("not working");
  } else if (size > 0 && size <= 100) {
    createGrids(size);
  }
}

function createGrids(size) {
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("grid-column");
    for (let j = 0; j < size; j++) {
      let gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      column.appendChild(gridCell);
    }
    sketchPad.appendChild(column);
  }
}
createGrids(16);

function resetGrids() {
  const removeColumns = document.getElementsByClassName("grid-column");
  while (removeColumns.length > 0) {
    removeColumns[0].remove(); // Remove the first column in each iteration
  }
}

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
  location.reload();
});

//change grid size for the "Enter" key press on the input field
gridSizeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkValidGridSize(gridSizeInput.value);
    resetGrids();
    createGrids(gridSizeInput.value);
  }
});

/*
Known Bugs 
- issue with generating user sized grids 
> number is added to the default grid size 

- resetting the grid 
> will add on default grid size to existing grids 

- input field is ugly 

Future features: 
- option to take a snapshot and export as image 
- Add a range slider to change grid size: 

const gridSlider = document.createElement("input");
gridSlider.className = "gridSlider";
gridSlider.type = "range";
gridSlider.setAttribute("min", "1");
gridSlider.setAttribute("max", "100");
gridSlider.setAttribute("value", "50");
menu.appendChild(gridSlider);
*/
