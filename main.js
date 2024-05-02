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
		result = "Wrong input"
	}

	return result;
}

btns = document.querySelectorAll("button");
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log(playRound(btn.textContent, getComputerChoice()));
	});
});