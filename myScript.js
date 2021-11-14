//myScript.js
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let displayButtonsCounter = 0;
let roundCounter = 0;

const gameContainer = document.getElementById("gameContainer");
const playGameBtn = document.getElementById("playGameBtn");
const gameButtons = document.getElementById("gameButtons");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resultBox = document.getElementById("resultBox");
const roundResultBox = document.getElementById("roundResultBox");
const scoreBox = document.getElementById("scoreBox");
const roundNumberBox = document.getElementById("roundNumberBox");

if (displayButtonsCounter == 0) {
gameContainer.removeChild(resultBox);
resultBox.removeChild(roundResultBox);
resultBox.removeChild(scoreBox);
resultBox.removeChild(roundNumberBox);
gameButtons.removeChild(rockBtn);
gameButtons.removeChild(paperBtn);
gameButtons.removeChild(scissorsBtn);
gameContainer.removeChild(gameButtons);
}

playGameBtn.addEventListener("mouseover", () => {
    playGameBtn.style.background = "black";
    playGameBtn.style.color = "rgb(191, 218, 192)";
    playGameBtn.style.borderStyle = "dotted";
    playGameBtn.style.borderColor = "rgb(191, 218, 192)";
    playGameBtn.style.borderWidth = "10px";
});
playGameBtn.addEventListener("mouseout", () => {
    playGameBtn.style.background = "rgb(191, 218, 192)";
    playGameBtn.style.color = "black";
});
playGameBtn.addEventListener("click", () => {
    gameContainer.removeChild(playGameBtn);
    roundCounter = 0;
    roundResultBox.textContent = "";
    scoreBox.textContent = "";
    roundNumberBox.textContent = "";
    playerScore = 0;
    computerScore = 0;
    roundNumberBox.textContent = `Round ${roundCounter + 1}`

    if (displayButtonsCounter < 1) {
        gameContainer.appendChild(resultBox);
        resultBox.appendChild(roundResultBox);
        resultBox.appendChild(scoreBox);
        resultBox.appendChild(roundNumberBox);
        gameContainer.appendChild(gameButtons);
        gameButtons.appendChild(rockBtn);
        gameButtons.appendChild(paperBtn);
        gameButtons.appendChild(scissorsBtn);
        
    }
    displayButtonsCounter++;   
});
rockBtn.addEventListener("click", () => {
    playRound("rock");
});
rockBtn.addEventListener("mouseover", () => {
    rockBtn.style.borderColor = "rgb(191, 218, 192)";
});
rockBtn.addEventListener("mouseout", () => {
    rockBtn.style.borderColor = "rgb(46, 48, 46)";
});
paperBtn.addEventListener("click", () => {
    playRound("paper");  
});
paperBtn.addEventListener("mouseover", () => {
    paperBtn.style.borderColor = "rgb(191, 218, 192)";
});
paperBtn.addEventListener("mouseout", () => {
    paperBtn.style.borderColor = "rgb(46, 48, 46)";
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});
scissorsBtn.addEventListener("mouseover", () => {
    scissorsBtn.style.borderColor = "rgb(191, 218, 192)";
});
scissorsBtn.addEventListener("mouseout", () => {
    scissorsBtn.style.borderColor = "rgb(46, 48, 46)";
});

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = "";
    if (randomNumber === 0) {
        computerChoice = "rock";
    }   else if (randomNumber === 1) {
        computerChoice = "paper";
    }   else if (randomNumber === 2) {
        computerChoice = "scissors";
    }   else {
        computerChoice = "Error";
    }
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let roundResult = "";
    roundCounter++;
    if (playerSelection == computerSelection) {
        roundResult = "That round was a tie!";
    }   else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "Computer wins that round!";
        computerScore = ++computerScore;
    }   else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "You win that round! Yay!!!";
        playerScore = ++playerScore;
    }   else {
        roundResult = "Hmm, something went wrong...let's just keep going";
    }
    roundResultBox.textContent = `Round ${roundCounter}/5 result: You chose ${playerSelection} and the computer chose ${computerSelection}... ${roundResult}`;
    scoreBox.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    roundNumberBox.textContent = `Round ${roundCounter + 1}...`;
    if (isGameOver()) {
        setFinalMessage();
        resetGame();
      }
};

function isGameOver() {
    return roundCounter == 5;
  }
function setFinalMessage() {
    if (playerScore > computerScore) {
    roundNumberBox.textContent = `...You won the game!!!!!!!! 😀`;
    } else if (computerScore > playerScore) {
    roundNumberBox.textContent = `...You lost the game 🙁`;
    } else if (computerScore == playerScore) {
    roundNumberBox.textContent = `...TIE GAME...how anticlimactic...`;
    }
}
function resetGame() {
    gameButtons.removeChild(rockBtn);
    gameButtons.removeChild(paperBtn);
    gameButtons.removeChild(scissorsBtn);
    gameContainer.removeChild(gameButtons);
    gameContainer.appendChild(playGameBtn);
    playGameBtn.textContent = `Play another 5-round Game!`;
    displayButtonsCounter = 0;
}
  
    