//script for etch-a-sketch project

//container for grid
const grid = document.querySelector(".container");
const userInput = document.getElementById("textField");
const resetButton = document.querySelector(".reset");
let gridSize = 16;
let gridArea = parseInt(gridSize * gridSize);

resetGrid();
createGrid();

function createGrid() {
    document.addEventListener("DOMContentLoaded", function(){
        gridTemplate(gridSize, gridArea);
    })
};

function updateGrid() {
    let gridSize = userInput.value;
    let gridArea = userInput.value * userInput.value;
    gridTemplate(gridSize, gridArea);
    console.log(userInput.value);
};

userInput.addEventListener("change", updateGrid);

function resetGrid () {
    resetButton.addEventListener("click", function(){
        gridTemplate(gridSize, gridArea);
});
};

function gridTemplate (gridSize, gridArea) {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat(${gridSize}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${gridSize}, 1fr)`);
    for (let i = 0; i < gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "gray";
        })
    }
};