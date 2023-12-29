//script for etch-a-sketch project

//container for grid
const container = document.querySelector(".container");
const userInput = document.querySelector("textField");
const resetButton = document.querySelector(".reset");
let gridSize = 16;

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        gridSize.appendChild(div);
    }
};

updateGrid = () => {
    gridSize.innterHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);
};

const square = document.querySelector("div");
square.addEventListener('mouseover', function(event){
    event.target.classList.replace("square", "color");
});

createGrid();