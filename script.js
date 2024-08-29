const grid = document.querySelector(".grid");
const button = document.querySelector("button");

// The length of the grid
const gridSide = grid.offsetHeight - 4;

// The default number of boxes
let size = 16;

// To change the size of the grid
button.addEventListener("click", () => {
    size = prompt("Enter the size of the grid:");
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
}

// init
generateBox();