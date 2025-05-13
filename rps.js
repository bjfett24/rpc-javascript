function getComputerChoice() {
    randomNum = Math.random();
    if (randomNum >= 0 && randomNum < (1 / 3)) {
        return "rock";
    } else if (randomNum >= (1 / 3) && randomNum < (2 / 3)) {
        return "paper";
    } else if (randomNum >= (2 / 3) && randomNum <= (1)) {
        return "scissors";
    }
}

// console.log(getComputerChoice())

function getHumanChoice() {
    choice = prompt("Choose 'r' for rock, 'p' for paper, or 's' for scissors")

    if (choice == "r") {
        return "rock";
    } else if (choice == "p") {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getHumanChoice())

let humanScore = 0;

let computerScore = 0;

function playRound(compChoice, humanChoice) {
    compChoice = compChoice.toLowerCase()
    humanChoice = humanChoice.toLowerCase()
    if (compChoice == humanChoice) {
        console.log(`Draw! ${compChoice} and ${humanChoice} are equal!`);
    } else if (compChoice == "rock" && humanChoice == "paper") {
        ++humanScore;
        console.log("You win! Your paper beats rock.");
    } else if (compChoice == "paper" && humanChoice == "rock") {
        ++computerScore;
        console.log("You lose! Paper beats your rock.");
    } else if (compChoice == "paper" && humanChoice == "scissors") {
        ++humanScore;
        console.log("You win! Your scissors beats paper.");
    } else if (compChoice == "scissors" && humanChoice == "paper") {
        ++computerScore;
        console.log("You lose! Scissors beats your paper.");
    } else if (compChoice == "rock" && humanChoice == "scissors") {
        ++computerScore;
        console.log("You lose! Rock beats your scissors.");
    } else if (compChoice == "scissors" && humanChoice == "rock") {
        ++humanScore;
        console.log("You win! Your rock beats scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);

