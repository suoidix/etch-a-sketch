//script for etch-a-sketch project

//container for grid
const grid = document.querySelector(".container");
const userInput = document.getElementById("textField");
const resetButton = document.querySelector(".reset");
const greyColor = document.querySelector(".grey");
const randomColor = document.querySelector(".random");
let divColor = "grey";
let div = document.querySelector(".square");
let drawToggle = false;
let defaultColor = false;
let rainbow = false;
let gridSize = 16;
let gridArea = gridSize * gridSize;

createGrid();
resetGrid();

function createGrid() {
    document.addEventListener("DOMContentLoaded", function(){
        gridTemplate(gridSize, gridArea);
    })
};

function updateGrid() {
    let gridSize = userInput.value;
    let gridArea = gridSize * gridSize;
    gridTemplate(gridSize, gridArea);
    console.log(userInput.value);
};

//Apply user input based on change to input field
userInput.addEventListener("change", updateGrid);

function resetGrid () {
    resetButton.addEventListener("click", function(){
        gridTemplate(gridSize, gridArea);
});
};

//Apply grid template
function gridTemplate (gridSize, gridArea) {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat(${gridSize}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${gridSize}, 1fr)`);
    for (let i = 0; i < gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
            div.addEventListener("mouseover", function() {
                if (drawToggle && rainbow) {
                    div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                }
                else if (drawToggle && defaultColor) {
                    div.style.backgroundColor = "grey";
                }
            })
        
    }
};

grid.addEventListener("click", function() {
    drawToggle = !drawToggle;
});

greyColor.addEventListener("click", function () {
    divColor = "grey";
    defaultColor = !defaultColor;
    if (rainbow = rainbow) {
        rainbow = !rainbow
    }
});

randomColor.addEventListener("click", function () {
    divColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    rainbow = !rainbow;
    if (defaultColor = defaultColor) {
        defaultColor = !defaultColor
    }
});