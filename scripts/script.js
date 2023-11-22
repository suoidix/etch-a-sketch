//script for etch-a-sketch project

//container for grid
const container = document.querySelector(".container");

let input = prompt ("Chose grid space!");
let gridInt = parseInt(input);
let gridSize = (gridInt*gridInt) + gridInt;
let gridSizePlus = parseInt(gridInt) + 1;

createGrid();


//create 16x16 grid
function createGrid(){
    for (i = 0; i < (gridSize); i++) {
        const div = document.createElement('div');
        div.id = 'box';
        container.appendChild(div);
    }
    const boxStyle = `
        .container>div:nth-child(${gridSizePlus}n + 1) {
            width: 100%;
            border: 0;
            height: 0;
          }`
    const styleSheet = document.createElement("style");
    styleSheet.innerText = boxStyle
    document.head.appendChild(styleSheet)
}

