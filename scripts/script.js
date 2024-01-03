//script for etch-a-sketch project

//container for grid
const grid = document.querySelector(".container");
const userInput = document.getElementById("textField");
const resetButton = document.querySelector(".reset");
const greyColor = document.querySelector(".grey");
const randomColor = document.querySelector(".random");
let divColor = "";
let click = false;
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
        div.classList.add(".square");
        grid.appendChild(div);
        grid.addEventListener("click", function(e) {
            div.addEventListener("mouseover", function() {
                div.style.backgroundColor = `${divColor}`;   
                })
            })
        }
    };

function toggleColor() {
    const squares = document.querySelectorAll(".square");

    if(!click) {
        squares.forEach((square) => {
            square.addEventListener("mouseleave", colorChoice);
        });
        click = true;
    } else {
        squares.forEach((square) => {
            square.removeEventListener("mouseleave", colorChoice);
        });
        click = false;
    }
}


greyColor.addEventListener("click", function () {
    divColor = "grey";
});

randomColor.addEventListener("click", function () {
    divColor = `hsl(${Math.random() * 360}, 100%, 50%)`
});

function colorChoice(e) {
    switch(divColor) {
        case "random":
            let random = 
    }
}