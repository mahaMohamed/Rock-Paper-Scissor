
/*Initializing Variables*/
const buttons = document.querySelectorAll("button");
let playerSelection;
let roundResult;
let computerWins = 0;
let playerWins = 0;

const computerMove = document.querySelector("#computer-move");
const playerMove = document.querySelector("#player-move");
const roundResultDisplay = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

/*Adding Event Listeners*/
for (let i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("click", playGame);

/*Contains the game logic*/
function playGame(e) {

    playerSelection = capitalizeFirstLetter(e.target.id);

    let computerSelection = computerPlay();

    playerMove.innerText = "Player's Move: " + playerSelection;

    computerMove.innerText = "Computer's Move: " + computerSelection;

    roundResult = playRound(computerSelection, playerSelection);

    roundResultDisplay.innerText = roundResult;

    if (roundResult.includes("win")) {
        playerWins++;
    } else if (roundResult.includes("Tie")) {
        playerWins++;
        computerWins++;
    } else {
        computerWins++;
    }

    playerScore.innerText = "Your Score : " + playerWins;
    computerScore.innerText = "Computer's Score : " + computerWins;

    

    /*Game is terminated once a player scores 5 points*/
    if (computerWins == 5 && playerWins <= 5) {
        playerWins < 5
            ? (finalResult.innerText = "You lost!")
            : (finalResult.innerText = "Tie");

        for (let i = 0; i < buttons.length; i++)
            buttons[i].removeEventListener("click", playGame);
    }

    if (playerWins == 5 && computerWins <= 5) {
        computerWins < 5
            ? (finalResult.innerText = "You won!")
            : (finalResult.innerText = "Tie");

        for (let i = 0; i < buttons.length; i++)
            buttons[i].removeEventListener("click", playGame);
    }
}


/*Computes a random unmber to represent the Computer's Move*/
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    let computerSelection =
        randomNumber == 0 ? "Rock" : randomNumber == 1 ? "Paper" : "Scissor";

    return computerSelection;
}

/*Computes the winner based on the game's rules*/
function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) return "Tie";
    else if (computerSelection == "Rock" && playerSelection == "Paper")
        return "You win! Paper beats Rock";
    else if (computerSelection == "Paper" && playerSelection == "Scissor")
        return "You win! Scissors beat paper";
    else if (computerSelection == "Scissor" && playerSelection == "Rock")
        return "You win! Rock beats Scissors";
    else if (computerSelection == "Scissor" && playerSelection == "Paper")
        return "You lose! Scissors beat Paper";
    else if (computerSelection == "Paper" && playerSelection == "Rock")
        return "You lose! Paper beats Rock";
    else if (computerSelection == "Rock" && playerSelection == "Scissor")
        return "You Lose! Rock beats Scissors";
}

/*Makes the player's selection case insensitive*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
