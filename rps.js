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
        ++yourScoreText.textContent;
        results.textContent = "You win! Your paper beats rock.";
    } else if (compChoice == "paper" && humanChoice == "rock") {
        ++compScoreText.textContent;
        results.textContent = "You lose! Paper beats your rock.";
    } else if (compChoice == "paper" && humanChoice == "scissors") {
        ++yourScoreText.textContent;
        results.textContent = "You win! Your scissors beats paper."
    } else if (compChoice == "scissors" && humanChoice == "paper") {
        ++compScoreText.textContent;
        results.textContent = "You lose! Scissors beats your paper."
    } else if (compChoice == "rock" && humanChoice == "scissors") {
        ++compScoreText.textContent
        results.textContent = "You lose! Rock beats your scissors."
    } else if (compChoice == "scissors" && humanChoice == "rock") {
        ++yourScoreText.textContent;
        results.textContent = "You win! Your rock beats scissors";
    }

    if (yourScoreText.textContent == 5 || compScoreText.textContent == 5) {
        if (yourScoreText.textContent > compScoreText.textContent) {
            middleBox.textContent = `You Won! Final Score: ${yourScoreText.textContent} to ${compScoreText.textContent}`;
            middleBox.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; font-size: 24px; background-color: green; color: white; border: 3px solid black; border-radius: 20px; text-align: center; flex: ; margin: 15px;");
            scoreBoard.append(middleBox);
        } else {
            middleBox.textContent = `You Lost! Final Score: ${yourScoreText.textContent} to ${compScoreText.textContent}`
            middleBox.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; font-size: 24px; background-color: red; color: white; border: 3px solid black; border-radius: 20px; text-align: center; flex: 2; margin: 15px;");
            scoreBoard.append(middleBox);
        }
        
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
body.setAttribute("style", "height: 100%; margin: 0; background-color: rgb(3, 62, 0);");


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
buttonBox.id = "buttonBox";
leftScreen.appendChild(buttonBox);

//results must be initialized before button functions!!//
const results = document.createElement("div");
results.textContent = "Choose Rock, Paper, or Scissors"

const compScoreDisplay = document.createElement("div");
compScoreDisplay.setAttribute("id", "compScoreDisplay");
compScoreDisplay.setAttribute("style", "flex: 6; display: flex; flex: 1;");


const yourScoreDisplay = document.createElement("div");
yourScoreDisplay.setAttribute("style", "flex: 6; display: flex; flex: 1;");
yourScoreDisplay.setAttribute("id", "yourScoreDisplay");



const yourScoreText = document.createElement("div");
yourScoreText.setAttribute("id", "yourScoreText");
yourScoreText.setAttribute("style", "justify-content: space-between;");
yourScoreText.textContent = 0

const compScoreText = document.createElement("div");
compScoreText.setAttribute("style", "justify-center: center;")
compScoreText.setAttribute("id", "compScoreText");
compScoreText.textContent = 0;


const scores = [yourScoreText, compScoreText];
for (score of scores) {
    score.setAttribute("style", "font-weight: bold; font-size: 60px")
}



const scoreBoard = document.createElement("div");
scoreBoard.setAttribute("style", "width: 70%; height: 85%; display: flex; flex-direction: column; justify-content: space-between;");
rightScreen.appendChild(scoreBoard);



const upperBox = document.createElement("div");
upperBox.setAttribute("id", "upperBox");
upperBox.setAttribute("style", "width: 100%; display: flex; justify-content: center; align-text: center; flex: 3;");
scoreBoard.appendChild(upperBox);

const middleBox = document.createElement("div");


const rockButton = document.createElement("button");
rockButton.addEventListener('click', () => {playRound("rock")});
buttonBox.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.addEventListener('click', () => {playRound("paper")});
buttonBox.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.addEventListener('click', () => {playRound("scissors")});
buttonBox.appendChild(scissorsButton);

const buttons = [rockButton, paperButton, scissorsButton];
for (b of buttons) {
    b.setAttribute("style", "align-items: center; flex-direction: column; display: flex; justify-content: space-between; font-family: sans-serif; font-size: 84px; width: 400px; height: 250px; border: 3px solid black; border-radius: 10px");
};

const rockText = document.createElement("div");
rockText.textContent = "Rock";
rockText.style.flex = 1;
rockButton.appendChild(rockText);

const paperText = document.createElement("div");
paperText.textContent = "Paper";
paperText.style.flex = 1;
paperButton.appendChild(paperText);

const scissorsText = document.createElement("div");
scissorsText.id = "scissorsText"
scissorsText.textContent = "Scissors";
scissorsText.style.fontSize = "60px";
scissorsText.style.flex = 1;
scissorsButton.appendChild(scissorsText);

const rockImage = document.createElement("img");
rockImage.setAttribute("src", "rock.png");
rockImage.setAttribute("alt", "Rock");
rockImage.style.width = "30%";
rockImage.style.border = "5px solid black";
rockImage.style.flex = 1;
rockButton.appendChild(rockImage);

const paperImage = document.createElement("img");
paperImage.setAttribute("src", "paper.png");
paperImage.setAttribute("alt", "Paper");
paperImage.style.width = "50%";
paperImage.style.flex = 1;
paperButton.appendChild(paperImage);

const scissorsImage = document.createElement("img");
scissorsImage.src = "scissor.png";
scissorsImage.alt = "Scissors";
scissorsImage.style.width = "60%";
scissorsImage.style.flex = 1;
scissorsButton.appendChild(scissorsImage);

rockButton.style.backgroundColor = 'rgb(110, 110, 110)';
rockButton.style.color = 'white';

paperButton.style.backgroundColor = 'rgb(255, 255, 255)';
paperButton.style.color = 'rgb(3, 62, 0)';

scissorsButton.style.backgroundColor = 'rgb(30, 23, 228)';
scissorsButton.style.color = 'white';




//results is initialized earlier//
results.setAttribute("id", "results");
results.setAttribute("style", "color: white; text-align: center; font-size: 38px; display: flex; flex-direction: column; justify-content: center; align-items: center;");
upperBox.appendChild(results);

const lowerBox = document.createElement("div");
lowerBox.setAttribute("style", "display: flex; justify-content: space-between; flex: 1;");
scoreBoard.appendChild(lowerBox);


const yourSide = document.createElement("div");
yourSide.setAttribute("style", "margin: 10px; width: 40%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; color: black; background-color: white; border: 3px solid black;");
lowerBox.appendChild(yourSide);

const compSide = document.createElement("div");
compSide.setAttribute("style", "margin: 10px; width: 40%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; color: black; background-color: white; border: 3px solid black;");
lowerBox.appendChild(compSide);

const yourHeader = document.createElement("div");
yourHeader.textContent = "Your Score";
yourHeader.setAttribute("style", "font-size: 24px; text-align: center; flex: 1")
yourSide.appendChild(yourHeader);

const compHeader = document.createElement("div");
compHeader.textContent = "Computer Score"
compHeader.setAttribute("style", "font-size: 22px; text-align: center; flex: 1;")
compSide.appendChild(compHeader);



yourSide.appendChild(yourScoreDisplay);
compSide.appendChild(compScoreDisplay);
yourScoreDisplay.appendChild(yourScoreText);
compScoreDisplay.appendChild(compScoreText);


















