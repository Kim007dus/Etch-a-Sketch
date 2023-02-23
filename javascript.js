const container = document.querySelector ("#container")
const grid = document.createElement ("div")
grid.classList.add ("grid") 

grid.style.width = "550px"
grid.style.height = "550px"
grid.style.background = "red"
grid.style.color = "black"

container.appendChild(grid)

console.log (grid)

