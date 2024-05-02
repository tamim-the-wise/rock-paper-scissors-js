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
	}
	else if (playerSelection == "paper" && computerSelection == "Scissors") {
		result = "You Lose! Scissors beats Paper";
	}
	else if (playerSelection == "scissors" && computerSelection == "Rock") {
		result = "You Lose! Rock beats Scissors";
	}
	else if (playerSelection == "paper" && computerSelection == "Rock") {
		result = "You Win! Paper beats Rock";
	}
	else if (playerSelection == "scissors" && computerSelection == "Paper") {
		result = "You Win! Scissors beats Paper";
	}
	else if (playerSelection == "rock" && computerSelection == "Scissors") {
		result = "You Win! Rock beats Scissors";
	}
	else if (playerSelection == computerSelection.toLowerCase()) {
		result = "Tie";
	}
	else {
		result = "Wrong input";
	}

	return result;
}

btns = document.querySelectorAll("button");
resultElement = document.querySelector("#result");
playerScoreElement = document.querySelector("#playerScore");
computerScoreElement = document.querySelector("#computerScore");
let computerScore = 0;
let playerScore = 0;

btns.forEach(btn => {
	btn.addEventListener('click', () => {
			
		let roundResult = playRound(btn.textContent, getComputerChoice());

		if (roundResult.includes("Win")) {
			playerScore += 1
		}
		else if (roundResult.includes("Lose")) {
			computerScore += 1
		}
			
		resultElement.textContent = roundResult;
		playerScoreElement.textContent = "Your score: " + playerScore;
		computerScoreElement.textContent = "Computer's Score: " + computerScore;

	});
});