 let playerScore = 0;
 let computerScore = 0;
 
 function getComputerChoice() {
	const computerChoices = ["Rock", "Paper", "Scissors"];
	
	let randomIndex = Math.floor(Math.random() * computerChoices.length);
	let randomChoice = computerChoices[randomIndex];

	return randomChoice;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	let result = null;

	if (playerSelection == "rock" && computerSelection == "Paper") {
		result = "You Lose! Paper beats Rock";
		computerScore++;
	}
	else if (playerSelection == "paper" && computerSelection == "Scissors") {
		result = "You Lose! Scissors beats Paper";
		computerScore++;
	}
	else if (playerSelection == "scissors" && computerSelection == "Rock") {
		result = "You Lose! Rock beats Scissors";
		computerScore++;
	}
	else if (playerSelection == "paper" && computerSelection == "Rock") {
		result = "You Win! Paper beats Rock";
		playerScore++;
	}
	else if (playerSelection == "scissors" && computerSelection == "Paper") {
		result = "You Win! Scissors beats Paper";
		playerScore++;
	}
	else if (playerSelection == "rock" && computerSelection == "Scissors") {
		result = "You Win! Rock beats Scissors";
		playerScore++;
	}
	else if (playerSelection == computerSelection.toLowerCase()) {
		result = "Tie";
	}
	else {
		result = "Wrong input";
	}

	return result;
}

function playAgain() {
	let container = document.querySelector(".container");
	let playAgainBtn = document.createElement("button");
	playAgainBtn.textContent = "Play again";
	container.appendChild(playAgainBtn);
	playAgainBtn.addEventListener('click', () => {
		let resultElement = document.querySelector("#result");
		let playerScoreElement = document.querySelector("#playerScore");
		let computerScoreElement = document.querySelector("#computerScore");
		let playerBtns = document.querySelectorAll(".playerBtn");
		
		playerBtns.forEach(btn => btn.disabled = false)
		
		playerScore = 0;
		computerScore = 0;
		
		resultElement.textContent = "";
		playerScoreElement.textContent = "";
		computerScoreElement.textContent = "";
		container.removeChild(playAgainBtn);
	})
}

function disableBtn(btn) {
	btn.disabled = true;
}

function playGame(playerChoice) {
	roundResult = playRound(playerChoice, getComputerChoice());

	let resultElement = document.querySelector("#result");
	let playerScoreElement = document.querySelector("#playerScore");
	let computerScoreElement = document.querySelector("#computerScore");
	let playerBtns = document.querySelectorAll(".playerBtn");

	resultElement.textContent = roundResult;
	playerScoreElement.textContent = `Your score: ${playerScore}`;
	computerScoreElement.textContent = `Computer's score: ${computerScore}`;

	if (playerScore == 5) {
		resultElement.textContent = "You won the game!!! :)"
		playerBtns.forEach(btn => disableBtn(btn));
		playAgain();
	}
	else if (computerScore == 5) {
		resultElement.textContent = "Computer has won the game!!! :("
		playerBtns.forEach(btn => disableBtn(btn));
		playAgain();
	}
}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener('click', () => playGame("rock"));
paperBtn.addEventListener('click', () => playGame("paper"));
scissorsBtn.addEventListener('click', () => playGame("scissors"));