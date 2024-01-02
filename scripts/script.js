//script for etch-a-sketch project

//container for grid
const grid = document.querySelector(".container");
const userInput = document.getElementById("textField");
const resetButton = document.querySelector(".reset");
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
        div.classList.add("square");
        grid.appendChild(div);
        document.querySelector(".container").addEventListener("click", function(e) {
            if(e.target.tagName != "BUTTON") {
                click = !click;
                    div.addEventListener("mouseover", function() {
                        if(click){
                            div.style.backgroundColor = "gray";
                        }
                    })
            }
        })
        
    }
};


//pseudocode for applyColor
function applyColor () {
    //if grey clicked
     //div background = grey
    //elseif random clicked
     //div background = random
    //else
      //div background = grey
}