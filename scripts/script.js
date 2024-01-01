//script for etch-a-sketch project

//container for grid
const grid = document.querySelector(".container");
const userInput = document.getElementById("textField");
const resetButton = document.querySelector(".reset");
let gridSize = 16;

function createGrid() {
    document.addEventListener("DOMContentLoaded", function(){
        updateGrid(32);
    })
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 1fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 1fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "gray";
        })
    }
    console.log(userInput.value);
};

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function(){
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid();
});

createGrid();