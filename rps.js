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
    compChoice = compChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
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
container.setAttribute("style", "height: 100%; display: flex; justify-content: space-between; flex-direction: column;")
body.appendChild(container);

const topScreen = document.createElement("div");
topScreen.setAttribute("style", "border: 5px solid black; display: flex; flex: 2; justify-content: space-between;")
//topScreen.textContent = "This is a test!";
container.appendChild(topScreen);

const bottomScreen = document.createElement("div");
bottomScreen.setAttribute("style", "border: 5px solid black; display: flex; flex: 1; justify-content: right;")
//bottomScreen.textContent = "This is a test!";
container.appendChild(bottomScreen);

const rockButton = document.createElement("button");
rockButton.addEventListener('click', playRound("rock"));
topScreen.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.addEventListener('click', playRound("paper"));
topScreen.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.addEventListener('click', playRound("scissors"));
topScreen.appendChild(scissorsButton);

const scoreBoard = document.createElement("div");
scoreBoard.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between; border: 3px solid black;");
//scoreBoard.textContent = "This is a test!";
bottomScreen.appendChild(scoreBoard);

const results = document.createElement("div");
results.setAttribute("style", "flex: 1;");
results.textContent = ""
scoreBoard.appendChild(results);

const lowerBox = document.createElement("div");
lowerBox.setAttribute("style", "display: flex; justify-content: space-between; flex: 4;")
scoreBoard.appendChild(lowerBox);


const yourSide = document.createElement("div");
yourSide.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between; color: black; background-color: white; border: 3px solid black;")
//yourSide.textContent = "This is a test!";
lowerBox.appendChild(yourSide);

const compSide = document.createElement("div");
compSide.setAttribute("style", "display: flex; flex-direction, column; justify-content: space-between; color: black; background-color: white; border: 3px solid black;")
//compSide.textContent = "This is a test!";
lowerBox.appendChild(compSide);

const yourHeader = document.createElement("div");
yourHeader.textContent = "Your Score";
//yourHeader.textContent = "This is a test!";
yourSide.appendChild(yourHeader);

const yourScoreDisplay = document.createElement("div");
yourSide.appendChild(yourScoreDisplay);

const compHeader = document.createElement("div");
compHeader.textContent = "Computer Score"
//compHeader.textContent = "This is a test!";
compSide.appendChild(compHeader);

const compScoreDisplay = document.createElement("div");
compSide.appendChild(compScoreDisplay);



mainGame();

























