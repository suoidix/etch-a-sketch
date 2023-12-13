//script for etch-a-sketch project

//container for grid
const container = document.querySelector(".container");
const styles = document.querySelector(".styles");
const grid = document.querySelector(".grid");
const enterGridSize = document.querySelector(".enter");
//styleSheet = document.createElement("style");
let count = 0;

resetInput();

//create dynamic grid
function createGrid(gridSize, gridSizePlus){
    for (let i = 0; i < (gridSize); i++) {
        div = document.createElement('div');
        div.id = 'box';
        container.appendChild(div);
    }
    boxStyle = `
        .container>div:nth-child(${gridSizePlus}n + 1) {
            width: 100%;
            border: 0;
            height: 0;
          }`
    styleSheet = document.createElement("style");
    styleSheet.id = 'style';
    styleSheet.innerText = boxStyle;
    grid.appendChild(styleSheet);
}

function getVal() {
    container.innerHTML = "";

    input = parseInt(document.querySelector('input').value);
    gridSize = (input*input) + input;
    gridSizePlus = (input) + 1;
    console.log(input);
    if (input > 0 && input < 20) { 
        createGrid(gridSize, gridSizePlus);
    }
  }

function resetInput() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    getVal();
  } 

enterGridSize.addEventListener('click', function () {
    resetInput();
});