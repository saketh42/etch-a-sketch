const grid = document.querySelector(".grid");
const button = document.querySelector(".grid-size-button");
const boxes = document.querySelectorAll('.box');
const reset = document.querySelector(".reset");
const colors = document.querySelectorAll(".color");

// The length of the grid
const gridSide = grid.offsetHeight - 4;

// The default number of boxes
let size = 16;
let color = "#2ecf35";

// To change the size of the grid
button.addEventListener("click", () => {
    size = prompt("Enter the size of the grid:");
    if (size > 100  || size < 1) {
        alert("Size should be between 1 and 100");
    } else {
        generateBox();
    }
});

// Reset Grid
reset.addEventListener("click", () => {
    generateBox();
});

// Color changing
colors.forEach(colorElement => {
    colorElement.addEventListener("click", () => {
        if (colorElement.classList.contains("red")) {
            color = "#cf352e";
        } else if (colorElement.classList.contains("blue")) {
            color = "#352ecf"; 
        } else if (colorElement.classList.contains("green")) {
            color = "#2ecf35"; 
        } else if (colorElement.classList.contains("black")) {
            color = "#000000"; 
        } else if (colorElement.classList.contains("white")) {
            color = "#ffffff"; 
        }
    });
});
// Grid generation
function generateBox() {
    const boxSide = gridSide / size - 2;

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.className = "box";
        
        box.style.margin = "1px";
        box.style.height = `${boxSide}px`;
        box.style.width = `${boxSide}px`;
        box.style.backgroundColor = "white";
        
        grid.appendChild(box);
    }

    const boxes = document.querySelectorAll('.box');

    //Coloring when hover
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = color;

            let currentOpacity = parseFloat(box.style.opacity) || 0; // Get current opacity
            if (currentOpacity < 1) {
                box.style.opacity = (currentOpacity + 0.2).toFixed(1);
            }
        });
    });
}


// init
generateBox();