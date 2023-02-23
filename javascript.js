const container = document.querySelector("#container")
const grid = document.createElement("div")
grid.classList.add("grid")
container.appendChild(grid)

let numDivs = 16

function makeDivs (numDivs) {
for (let i=0; i > numDivs; i++) {
        let cells = document.createElement("div")
        cells.classList.add (cells)
        grid.appendChild(cells)
    }
}








