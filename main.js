 function getComputerChoice() {
	const computerChoices = ["Rock", "Paper", "Scissors"]
	
	let randomIndex = Math.floor(Math.random() * choices.length)
	let randomChoice = computerChoices[randomIndex]

	return randomChoice
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()

	let result = null

	if (playerSelection == "rock" && computerSelection == "Paper") {
		result = "You Lose! Paper beats Rock"
	}
	else if (playerSelection == "paper" && computerSelection == "Scissors") {
		result = "You Lose! Scissors beats Paper"
	}
	else if (playerSelection == "scissors" && computerSelection == "Rock") {
		result = "You Lose! Rock beats Scissors"
	}
	else if (playerSelection == "paper" && computerSelection == "Rock") {
		result = "You Win! Paper beats Rock"
	}
	else if (playerSelection == "scissors" && computerSelection == "Paper") {
		result = "You Win! Scissors beats Paper"
	}
	else if (playerSelection == "rock" && computerSelection == "Scissors") {
		result = "You Win! Rock beats Scissors"
	}
	else if (playerSelection == computerSelection.toLowerCase()) {
		result = "Tie"
	}
	else {
		result = "Wrong input"
	}

	return result
}


function game() {
	let playerPoint = 0
	let computerPoint = 0

	for (let i = 1; i <= 5; i++) {
		let playerSelection = prompt()
		let computerSelection = getComputerChoice()
		let roundResult = playRound(playerSelection, computerSelection)
		
		console.log(roundResult)

		if (roundResult.includes("Win")) {
			playerPoint += 1
		}
		else if (roundResult.includes("Lose")) {
			computerPoint += 1
		}
	}

	if (playerPoint > computerPoint) {
		console.log("Yow Won the game!")
	}
	else if (playerPoint < computerPoint) {
		console.log("Computer Won the game!")
	}
	else {
		console.log("Game is Tie")
	}
}

game()
