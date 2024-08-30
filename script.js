const grid = document.querySelector(".grid");
const button = document.querySelector(".grid-size-button");
const boxes = document.querySelectorAll('.box');
const reset = document.querySelector(".reset");

// The length of the grid
const gridSide = grid.offsetHeight - 4;

// The default number of boxes
let size = 16;

// To change the size of the grid
button.addEventListener("click", () => {
    size = prompt("Enter the size of the grid:");
    if (size > 100  || size < 1) {
        alert("Size should be between 1 and 100");
    } else {
        generateBox();
    }
});

reset.addEventListener("click", () => {
    generateBox();
});

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

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener('mouseout', () => {
            if (box.style.backgroundColor == "white") {
                box.style.backgroundColor = "black";
                box.style.opacity = "0.2";
            } else {
                let currentOpacity = parseFloat(box.style.opacity);
                if (currentOpacity < 1) {
                    box.style.opacity = (currentOpacity + 0.2).toString();
                }
            }
        });
    });
}


// init
generateBox();