
const container = document.querySelector("#container")
const grid = document.createElement ("div")
grid.classList.add ("grid")
container.appendChild(grid)


function makeDivs (row, col) {
    grid.style.setProperty ('--grid-col', col)
    grid.style.setProperty ('--grid-row', row)
    
        for (c = 0; c < (col * row); c++) {
        let cell = document.createElement ("div")
        cell.classList.add ("cell")
        grid.appendChild(cell) 
        cell.addEventListener("mousemove", () => {
            cell.classList.add ("sketching")
        })
    }
   
}

makeDivs (16, 16)

// The cell needs to change color when hover and stay that color.






