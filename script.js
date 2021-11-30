function computerPlay() {
	let num = Math.floor(Math.random() * 3);
	var hand = 'scissor';
	switch(num) {
		case 0: 
			hand = 'rock';
			break;
		case 1:
			hand = 'paper';
			break;
		default:
			break;
	}
	return hand;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissor') || (playerSelection == 'scissor' && computerSelection == 'rock')) {
		console.log("You Lose! " + computerSelection + " beats " + playerSelection);
	} else if((playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock')) {
		console.log("You win! " + playerSelection + " beats " + computerSelection);
	} else {
		console.log("Draw!");
	}
}

function game() {
	for (var i = 0; i < 5; i++) {
		console.log("Round " + (i+1) + "!");
		let playerMove = prompt('your choice');
		let computerMove = computerPlay();
		console.log("You choose " + playerMove);
		console.log("Computer choose " + computerMove);
		playRound(playerMove, computerMove);
	}
}