//script for etch-a-sketch project

//container for grid
const grid = document.querySelector(".container");
const userInput = document.getElementById("textField");
const resetButton = document.querySelector(".reset");
let gridSize = 16;

resetGrid();
createGrid();

function createGrid() {
    document.addEventListener("DOMContentLoaded", function(){
        grid.innerHTML = "";
        userInput.value = "";
        grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
        grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
        for (let i = 0; i < 256; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            grid.appendChild(div);
            div.addEventListener("mouseover", function() {
                div.style.backgroundColor = "gray";
            })
        }
        resetGrid();
    })
};

function updateGrid() {
    grid.innerHTML = "";
    let size = userInput.value * userInput.value;
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 1fr)`);
    for (let i = 0; i < size; i++) {
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

function resetGrid () {
    resetButton.addEventListener("click", function(){
        grid.innerHTML = "";
        userInput.value = "";
        grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
        grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
        for (let i = 0; i < 256; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            grid.appendChild(div);
            div.addEventListener("mouseover", function() {
                div.style.backgroundColor = "gray";
            })
        }
});
};