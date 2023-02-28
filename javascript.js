
const container = document.querySelector("#container")
const grid = document.createElement ("div")
grid.classList.add ("grid")
container.appendChild(grid)


function makeDivs (row, col) {
    grid.style.setProperty ('--grid-col', col)
    grid.style.setProperty ('--grid-row', row)
        for (let c = 0; c < (col * row); c++) {
        let cell = document.createElement ("div")
        grid.appendChild(cell)

       
        
        
    }

}

makeDivs (16, 16)













