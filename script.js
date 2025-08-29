let letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                "a", "s", "d", "f", "g", "h", "j", "k", "l",
                "z", "x", "c", "v", "b", "n", "m"]

function getRandomLetter(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

let letter = getRandomLetter(letters)
//alert(letter)



document.querySelector(".generate").onclick = function() {
    let checkBox1 = document.querySelector(".lower");
    let checkBox2 = document.querySelector(".upper")
    let checkBox3 = document.querySelector(".num")
    let checkBox4 = document.querySelector(".symb")
    let word = "123"
    let mainInput = document.querySelector(".mainInput")

    if (checkBox1.checked) {
        document.querySelector(".output").value = getRandomLetter(letters)
        console.log("1")
    }
    if (checkBox2.checked) {
        document.querySelector(".output").value = "WDWDWDFE"
        console.log("2")
    }
    if (checkBox3.checked) {
        document.querySelector(".output").value = "23131232"
        console.log("3")
    }
    if (checkBox4.checked) {
        document.querySelector(".output").value = "^@&*#@^#@"
        console.log("4")
    }
//    if (mainInput = word) {
//        alert("banana")
//    }
}