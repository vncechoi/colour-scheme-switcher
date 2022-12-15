const switcherRed = document.querySelector('.red')
const switcherWhite = document.querySelector('.white')
const switcherBlue = document.querySelector('.blue')
const switcherYellow = document.querySelector('.yellow')

let changeBkgRed = switcherRed.dataset 
let changeBkgWhite = switcherRed.dataset
let changeBkgBlue = switcherRed.dataset
let changeBkgYellow = switcherRed.dataset

const actualRed = function () {
    document.body.style.backgroundColor = "red";
}
const actualWhite = function () {
    document.body.style.backgroundColor = "white";
}
const actualBlue = function () {
    document.body.style.backgroundColor = "blue";
}
const actualYellow = function () {
    document.body.style.backgroundColor = "yellow";
}

switcherRed.addEventListener('click', actualRed)
switcherWhite.addEventListener('click', actualWhite)
switcherBlue.addEventListener('click', actualBlue)
switcherYellow.addEventListener('click', actualYellow)