//script for etch-a-sketch project

//container for grid
const container = document.querySelector(".container");

//create 16x16 grid
function createGrid(){
    for (i = 0; i <= 256; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

createGrid();
