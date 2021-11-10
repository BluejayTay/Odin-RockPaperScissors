//myScript.js

let playerScore = 0;
let computerScore = 0;

//Create a function named computerplay that will randomly retun the string; "rock", "paper", or "scissors"
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
}
/* Create a function that plays a round of rock,paper,scissors 
if user wins, their score is added a point
if computer wins, their score is added a point 
an alert displays what user chose vs. what computer chose and says whether the user won the round or not
function ulimately returns the result of the round re: tie/win/lose/error */
function playRound(playerSelection, computerSelection) {
    playerSelection = window.prompt("What will it be? rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay();
    let roundResult = "";
    if (playerSelection == computerSelection) {
        roundResult = "It's a tie!";
        alert("You chose " + playerSelection + " and the computer chose " + computerSelection + ". " + roundResult);
    }   else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "You lose, computer wins this round! \nThis doesn't bode very well for humankind... let's just keep going...";
        computerScore = ++computerScore;
        alert("You chose " + playerSelection + " and the computer chose " + computerSelection + ". \n" + roundResult);
    }   else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "You win this round! Yay!!!";
        playerScore = ++playerScore;
        alert("You chose " + playerSelection + " and the computer chose " + computerSelection + ". \n" + roundResult);
    }   else {
        roundResult = "Hmm, something went wrong...";
        alert("You chose " + playerSelection + " and the computer chose " + computerSelection + ". \n" + roundResult + " ... \nLet's just move along, shall we?");
    }
    return roundResult;
}
// function to alert user about the score so far
function updateScore() {
   alert("Your score is: " + playerScore + " and the computer's score is: " + computerScore);
}
// function to alert user about the final score result
function finalResult() {
    if (playerScore > computerScore) {
        alert("Your final score is: " + playerScore + " and the computer's final score is: " + computerScore + "... \nYOU WIN!!!! \nMaybe there IS hope for man in the war against the machines after all! Refresh the page to play again!")
    } else if (computerScore > playerScore) {
        alert("Your final score is: " + playerScore + " and the computer's final score is: " + computerScore + "... \nYOU LOSE!!!! \nSorry brah, better luck next time! Refresh the page to play again!")
    } else {
        alert("Your final score is: " + playerScore + " and the computer's final score is: " + computerScore + "... \nTIE GAME! \nHow anticlimactic... refresh the page to play again!")
    }
}
/* function to play 5 rounds of rock,paper,scissors
has alert in begining to intoduce the game
alerts user of the round #
updates user about the on-going score after each round
gives alert at end about final result */
function game() {
    alert(
    "Welcome to the thrilling game of Rock, Paper, Scissors! \nHit 'ok' or 'close' to play a quick 5-round game! \n(make sure your answers don't have any spaces - just the word by itself!)");
    alert("Round 1");
    playRound();
    updateScore();
    alert("Round 2");
    playRound();
    updateScore();
    alert("Round 3");
    playRound();
    updateScore();
    alert("Round 4");
    playRound();
    updateScore();
    alert("Round 5");
    playRound();
    updateScore();
    finalResult();
}
game();