const LETTERS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                "a", "s", "d", "f", "g", "h", "j", "k", "l",
                "z", "x", "c", "v", "b", "n", "m"]
const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*"]

function getRandomLetter(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomSymbol(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i)
        [arr[i], arr[j]] = [arr[j], arr[i]];

    }
    return arr
}

document.querySelector(".generate").onclick = function() {
    let checkLower = document.querySelector(".lower");
    let checkUpper = document.querySelector(".upper")
    let checkNum = document.querySelector(".num")
    let checkSymb = document.querySelector(".symb")
    let lengthSelect = document.querySelector(".length")

    if (checkLower.checked) {
        document.querySelector(".output").value = getRandomLetter(letters)
        console.log("1")
    }
    if (checkUpper.checked) {
        document.querySelector(".output").value = getRandomLetter(letters).toUpperCase()
        console.log("2")
    }
    if (checkNum.checked) {
        document.querySelector(".output").value = getRandomInt(1, 9)
        console.log("3")
    }
    if (checkSymb.checked) {
        document.querySelector(".output").value = getRandomSymbol(symbols)
        console.log("4")
    }
//    if (mainInput = word) {
//        alert("banana")
//    }
}