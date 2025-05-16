let humanScore = 0;
let computerScore = 0;


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



// playRound(computerSelection, humanSelection);
function playRound(humanChoice) {
    const compChoice = getComputerChoice();

    if (compChoice == humanChoice) {
        results.textContent = `Draw! ${compChoice} and ${humanChoice} are equal!`;
    } else if (compChoice == "rock" && humanChoice == "paper") {
        humanScore = ++humanScore;
        results.textContent = "You win! Your paper beats rock.";
    } else if (compChoice == "paper" && humanChoice == "rock") {
        computerScore = ++computerScore;
        results.textContent = "You lose! Paper beats your rock.";
    } else if (compChoice == "paper" && humanChoice == "scissors") {
        humanScore = ++humanScore;
        results.textContent = "You win! Your scissors beats paper."
    } else if (compChoice == "scissors" && humanChoice == "paper") {
        computerScore = ++computerScore;
        results.textContent = "You lose! Scissors beats your paper."
    } else if (compChoice == "rock" && humanChoice == "scissors") {
        computerScore = ++computerScore;
        results.textContent = "You lose! Rock beats your scissors."
    } else if (compChoice == "scissors" && humanChoice == "rock") {
        humanScore = ++humanScore;
        results.textContent = "You win! Your rock beats scissors";
    }
}

function mainGame() {
    let humanScore = 0;

    let computerScore = 0;

    

    /*for (let i = 0; i < numOfRounds; i++) {
    
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
    return [humanScore, computerScore]*/

    



}

const myHTML = document.documentElement;
myHTML.setAttribute("style", "height: 100vh; margin: 0;");

const body = document.querySelector("body");
body.setAttribute("style", "height: 100%; margin: 0;");


const container = document.createElement("div");
container.setAttribute("style", "height: 100%; display: flex; justify-content: space-between;");
body.appendChild(container);

const leftScreen = document.createElement("div");
leftScreen.setAttribute("style", "padding: 70px; flex: 1; display: flex; justift-content: center; align-items: center;");
container.appendChild(leftScreen);

const rightScreen = document.createElement("div");
rightScreen.setAttribute("style", "display: flex; flex: 1; justify-content: center; align-items: center;");
container.appendChild(rightScreen);

const buttonBox = document.createElement("div");
buttonBox.setAttribute("style", "gap: 24px; width: 100%; height: 100%; display: flex; flex: 2; justify-content: space-between; align-items: center; flex-direction: column;");
leftScreen.appendChild(buttonBox);

//Results must be initialized before button functions!!//
const results = document.createElement("div");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener('click', playRound("rock"));
buttonBox.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener('click', playRound("paper"));
buttonBox.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors"
scissorsButton.addEventListener('click', playRound("scissors"));
buttonBox.appendChild(scissorsButton);

const buttons = [rockButton, paperButton, scissorsButton];
for (b of buttons) {
    b.setAttribute("style", "font-family: sans-serif; font-size: 84px; width: 400px; height: 250px; border: 3px solid black; border-radius: 10px");
};

const scoreBoard = document.createElement("div");
scoreBoard.setAttribute("style", "width: 70%; height: 85%; display: flex; flex-direction: column; justify-content: space-between; border: 3px solid black;");
rightScreen.appendChild(scoreBoard);


results.setAttribute("style", "flex: 1;");
results.textContent = ""
scoreBoard.appendChild(results);

const lowerBox = document.createElement("div");
lowerBox.setAttribute("style", "display: flex; justify-content: space-between; flex: 1;");
scoreBoard.appendChild(lowerBox);


const yourSide = document.createElement("div");
yourSide.setAttribute("style", "margin: 10px; width: 40%; display: flex; flex-direction: column; justify-content: space-between; color: black; background-color: white; border: 3px solid black;");
lowerBox.appendChild(yourSide);

const compSide = document.createElement("div");
compSide.setAttribute("style", "margin: 10px; width: 40%; display: flex; flex-direction, column; justify-content: space-between; color: black; background-color: white; border: 3px solid black;");
lowerBox.appendChild(compSide);

const yourHeader = document.createElement("div");
yourHeader.textContent = "Your Score";
yourSide.appendChild(yourHeader);

const yourScoreDisplay = document.createElement("div");
yourSide.appendChild(yourScoreDisplay);

const compHeader = document.createElement("div");
compHeader.textContent = "Computer Score"
compSide.appendChild(compHeader);

const compScoreDisplay = document.createElement("div");
compSide.appendChild(compScoreDisplay);


























