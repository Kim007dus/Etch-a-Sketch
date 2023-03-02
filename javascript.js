const container = document.querySelector("#container")
const grid = document.createElement("div")
grid.classList.add("grid")
container.appendChild(grid)
const buttonStart = document.querySelector("#start")
const buttonClean = document.querySelector("#clean")
const buttonBlack = document.querySelector("#black")
const buttonRainbow = document.querySelector("#rainbow")

function makeDivs(number) {
    for (c = 0; c < (number * number); c++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")
        grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${number}, 1fr)`
        grid.appendChild(cell)
        cell.addEventListener("mousemove", () => {
            cell.classList.add("sketching")

            buttonClean.addEventListener("click", () => {
                cell.classList.remove("sketching")

            })
        })
        buttonRainbow.addEventListener("click", () =>
            cell.addEventListener("mousemove", () => {
                cell.classList.add("sketchingrainbow")
                buttonClean.addEventListener("click", () => {
                    cell.classList.remove("sketchingrainbow")
                })
            })
        )
        buttonBlack.addEventListener("click", () =>
        cell.addEventListener("mousemove", () => {
            cell.classList.remove("sketchingrainbow")
            cell.classList.add ("sketching")
            buttonClean.addEventListener("click", () => {
                cell.classList.remove("sketching")
            })
        })
        )
    }
}


makeDivs(16)




buttonStart.addEventListener("click", () => {
    let row = prompt("Choose the size of the sketch please! (max 64)")
    if (row > 64) return alert("Error, the size needs to be smaller than 64!")
    if (row <= 64) {
        makeDivs(row)
    }

})
// The cell needs to change color when hover and stay that color.