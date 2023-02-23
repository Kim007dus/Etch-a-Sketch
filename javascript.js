const container = document.querySelector("#container")
const grid = document.createElement("div")
grid.classList.add("grid")

grid.style.width = "600px"
grid.style.height = "600px"
grid.style.background = "red"
grid.style.color = "black"

container.appendChild(grid)

const table = document.createElement ("table")
table.classList.add ("table")
table.style.width = "400px"
table.style.height = "400px"
table.style.background = "white"

grid.appendChild(table)