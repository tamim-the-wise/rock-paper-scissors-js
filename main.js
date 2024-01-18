// Declare a FUNCTION getComputerChoice to get computer's choice
// Declare array choices containing all possible choices
// Declare index VARIABLE
// Gnerate a random number from 0 to 1 multiplied by the length of choices array. Round the number and store in index VARIABLE
// RETURN value of randomly generated index from choices array
function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"]
	let index = Math.floor(Math.random() * choices.length)
	return choices[index]
}
