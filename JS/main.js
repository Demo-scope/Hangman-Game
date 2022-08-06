// بسم الله الرحمن الرحيم 
// Start Project



const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters)
let  lettersContaner = document.querySelector(".contaner .row .letters")



lettersArray.forEach(function(ele) {
    let span = document.createElement("span")
    span.classList.add("letterBox")
    span.appendChild(document.createTextNode(ele))

    lettersContaner.appendChild(span)
})



// #####################################


const words = {
    programing: ["php", "javascript", "html", "css", "mysql", "python", "sass"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words)
let randomKey = allKeys[Math.floor(Math.random() * allKeys.length) ]
let randomValue = words[randomKey][Math.floor(Math.random() * words[randomKey].length)]
document.querySelector(".contaner .info .category span").innerHTML = randomKey



// #####################################



let lettersGuessContaner = document.querySelector(".contaner .letters-guess")

let ArrayOfRandomValue = Array.from(randomValue.toLowerCase())
ArrayOfRandomValue.forEach(function(ele) {
    let span = document.createElement("span")
    if (ele === " ") {
        span.classList.add("space")
    }
    lettersGuessContaner.appendChild(span)
})



// #####################################

let ManExcution = document.querySelector(".contaner .row .hangman-draw")
let wrongTries = 0;
let rightTries = 0;

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("letterBox")) {
        e.target.classList.add("clicked")
        let chosenLatter = e.target.innerHTML.toLowerCase()


        let states = false;

        ArrayOfRandomValue.forEach(function(ele , index) {
            if (chosenLatter === ele) {
                lettersGuessContaner.children[index].innerHTML = ele
                lettersGuessContaner.children[index].classList.add("good")
                lettersGuessContaner.children[index].style.cssText = "border-bottom: 3px solid #cddc39;"
                states = true;
                rightTries++;
            }
        })

        if (states === false) {
            wrongTries++;
            ManExcution.classList.add(`wrong-${wrongTries}`)
            document.querySelector("audio#error").play()
            if (wrongTries === 8) {
                document.querySelector(".contaner .row .letters .finish").style.cssText = "display:flex;"
                document.querySelector(".contaner .row .letters .finish p").innerHTML = "Game Over"
                ArrayOfRandomValue.forEach(function(ele , index){
                    if(lettersGuessContaner.children[index].classList.contains("good")) {
                        lettersGuessContaner.children[index].innerHTML = ele
                    } else {
                        lettersGuessContaner.children[index].innerHTML = ele
                        lettersGuessContaner.children[index].style.cssText = "border-bottom: 3px solid red;"
                    }
                })
            }
        } else {
            document.querySelector("audio#nice").play()
            if (rightTries === ArrayOfRandomValue.length) {
                document.querySelector(".contaner .row .letters .finish").style.cssText = "display:flex;"
                document.querySelector(".contaner .row .letters .finish p").innerHTML = "Well Done"
                document.querySelector(".contaner .row .letters .finish p").style.cssText = " box-shadow: 0 0 20px 0px #e7e3e3; color: #00bcd4;"

            }
        }

    }
})










// To Win The Game hhah hah 
// iam not forgoten this line here .. don't worry :)
console.log(randomValue)