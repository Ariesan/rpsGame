const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
const resetButton = document.getElementById("reset")
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice 
     
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 1) {
        computerChoice = "rock"
    }    
    if (randomNumber === 2) {
        computerChoice = "scissor"
    }    
    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Its a Draw"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You Win! 🥳 🥳 🥳"
    }
    if (computerChoice === "rock" && userChoice === "scissor") {
        result = "Oh, No... 😩 You lost!"
    }
    if (computerChoice === "paper" && userChoice === "scissor") {
        result = "You Win! 🥳 🥳 🥳"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "Oh, No... 😩 You lost!"
    }
    if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You Win! 🥳 🥳 🥳"
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = "Oh, No... 😩 You lost!"
    }
resultDisplay.innerHTML = result
}





//refresh page for new game
resetButton.addEventListener("click",() => location.reload())