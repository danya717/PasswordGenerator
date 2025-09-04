const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                "a", "s", "d", "f", "g", "h", "j", "k", "l",
                "z", "x", "c", "v", "b", "n", "m"]
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]

function getRandomLetter(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
function getRandomInt(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
function getRandomSymbol(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];

    }
    return arr;
}

document.querySelector(".generate").onclick = function() {
    let checkLower = document.querySelector(".lower");
    let checkUpper = document.querySelector(".upper");
    let checkNum = document.querySelector(".num");
    let checkSymb = document.querySelector(".symb");
    let lengthSelect = document.querySelector(".length");
    let length = parseInt(lengthSelect.value, 10) || 10;

    let lowerPool = letters.slice();
    let numPool = nums.slice();
    let symPool = symbols.slice();
    let upperPool = letters.map(letter => letter.toUpperCase());

    let pool = [];
    let required = [];
    let password = shuffle(required)


    if (checkLower.checked) {
        pool = pool.concat(lowerPool);
        required.push(getRandomLetter(lowerPool));
        document.querySelector(".output").value = password
    }
    if (checkUpper.checked) {
        pool = pool.concat(upperPool)
        required.push(getRandomLetter(upperPool))
        document.querySelector(".output").value = password
    }
    if (checkNum.checked) {
        pool = pool.concat(numPool)
        required.push(getRandomInt(numPool))
        document.querySelector(".output").value = password
    }
    if (checkSymb.checked) {
        pool = pool.concat(symPool)
        required.push(getRandomSymbol(symPool))
        document.querySelector(".output").value = password
    }
//    if (mainInput = word) {
//        alert("banana")
//    }
}