// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    let amount = 0
    function randomizeRGB() {
        const randomNumber = Math.floor(Math.random() * 16777215)
        const hexColor = "#" + randomNumber.toString(16).padStart(6, "0")

        return hexColor
    }
    while(amount <=0 || amount > 100){
      amount = prompt("How many squares you want? min 1 - max 100",16)
    }
    let size = 100/amount
    let cols = Math.floor(Math.sqrt(amount))
    let restCols = amount - cols*cols

    function createDivs(num) {
        for (let i = 0; i < num; i++) {
            const newDiv = document.createElement("div")
            newDiv.className = "divs"
            newDiv.style.height = 0
            newDiv.style.paddingBottom = `${size}%`
            newDiv.style.width = size + "%"
            newDiv.innerHTML = ""
            newDiv.style.backgroundColor = randomizeRGB()
            document.getElementById("divContainer").appendChild(newDiv)
        }
    }
    createDivs(amount)


    document.querySelectorAll(".divs").forEach(divs => {
        let startBrightness = 1


        divs.addEventListener("mouseenter", function () {

            this.style.backgroundColor = randomizeRGB()
            this.style.filter = `brightness(${startBrightness})`
            startBrightness -= 0.1
        })
    })


});
