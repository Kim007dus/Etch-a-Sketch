
const container = document.querySelector("#container")

function makeDivs (numDivs) {
        for (let c = 0; c < (numDivs * numDivs); c++) {
        let cells = document.createElement ("div")
        container.appendChild(cells)
        
    }

}

makeDivs (16)











