// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    function randomizeRGB() {
        const randomNumber = Math.floor(Math.random() * 16777215)
        const hexColor = "#" + randomNumber.toString(16).padStart(6, "0")

        return hexColor
    }

    function createDivs(num) {
        for (let i = 0; i < num; i++) {
            const newDiv = document.createElement("div")
            newDiv.id = `div${i}`
            console.log(newDiv.id)
            newDiv.className = "divs"
            newDiv.style.height = "50px"
            newDiv.style.width = "50px"
            newDiv.innerHTML = "."
            newDiv.style.backgroundColor = randomizeRGB()
            document.getElementById("divContainer").appendChild(newDiv)
        }
    }


    document.querySelectorAll(".divs").forEach(divs => {
        let startBrightness = 1


        divs.addEventListener("mouseenter", function () {

            this.style.backgroundColor = randomizeRGB()
            this.style.filter = `brightness(${startBrightness})`
            startBrightness -= 0.1
        })
    })

    const numOfDivs = document.getElementById("inputDivs")
    console.log(numOfDivs.value)
    numOfDivs.addEventListener("change", createDivs(numOfDivs.value))

});
