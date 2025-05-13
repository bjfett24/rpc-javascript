function getComputerChoice() {
    randomNum = Math.random
    if (randomNum >= 0 && randomNum < (1 / 3)) {
        console.log("rock")
    } else if (randomNum >= (1 / 3) && randomNum < (2 / 3)) {
        console.log("paper")
    } else if (randomNum >= (2 / 3) && randomNum <= (1)) {
        console.log("scissors")
    }
}

getComputerChoice()

getComputerChoice()

getComputerChoice()