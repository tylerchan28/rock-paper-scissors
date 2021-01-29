let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');


function computerPlay() {
    var choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}
function disableBtn() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || 
    (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") ||
    (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) {
        playerScore++;
        result = `You win! <br>You picked: ${playerSelection}. Computer picked: ${computerSelection}. <br>Your score: ${playerScore}. Computer's score: ${computerScore}`;
        if (playerScore == 5) {
            result += `<br><br>You won the game! Your score: ${playerScore} Computer's score: ${computerScore} <br><br> Refresh to play again!`;
            disableBtn();
        }
    }
        
    else if (playerSelection == computerSelection){
        result = `You tied with the computer. <br>You picked: ${playerSelection}. Computer picked: ${computerSelection}. <br>Your score: ${playerScore} Computer's score: ${computerScore}`;
        }

    else {
        computerScore++;
        result = `You lose! <br>You picked: ${playerSelection}. Computer picked: ${computerSelection}. <br>Your score: ${playerScore}. Computer's score: ${computerScore}`;
        if (computerScore == 5) {
            result += `<br><br>You lost the game! Your score: ${playerScore} Computer's score: ${computerScore} <br><br> Refresh to play again!`;
            disableBtn();
        }
    }
    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener(`click`, () => {
        playRound(button.value);
    })
})

