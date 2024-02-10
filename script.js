const rows = 16;
const columns = 16;

function createGrids(rows, columns) {
  let screen = document.querySelector(".gridScreen");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for (let j = 0; j < columns; j++) {
      let gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      row.appendChild(gridCell);
    }
    screen.appendChild(row);
  }
}
createGrids(rows, columns);
