console.log("Bonjour console")

let count = 11

const countAddBtn = document.getElementById("add")
const countHeader = document.getElementById("count")
const countSubBtn = document.getElementById("sub")

countHeader.innerText = count
countAddBtn.addEventListener("click", () => {
    console.log("push + ")
    count++
    countHeader.innerText = count
})

countSubBtn.addEventListener("click", () => {
    console.log("push - ")
    count--
    countHeader.innerText = count
})