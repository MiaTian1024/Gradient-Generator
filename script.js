const display = document.querySelector(".display")
const directionMenu = document.querySelector("select")
const colorInput = document.querySelectorAll(".colors input")
const info = document.querySelector(".info p")
const refreshBtn = document.querySelector(".refreshBtn")
const copyBtn = document.querySelector(".copyBtn")

const getRandomColor = () =>{
    //generate a random color in hexadecimal format
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInput[0].value = getRandomColor();
        colorInput[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${directionMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`
    display.style.background = gradient;
    info.innerText = `background: ${gradient}`
}

const copyCode = () =>{
    navigator.clipboard.writeText(info.innerText);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600)
}

colorInput.forEach((input) => {
    //calling generateGradient function on each color input clicks
    input.addEventListener("input", () => generateGradient(false))
})


directionMenu.addEventListener("change", () => generateGradient(false))
refreshBtn.addEventListener("click", () => generateGradient(true))
copyBtn.addEventListener("click", copyCode)

