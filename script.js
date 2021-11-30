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
		return "lose";
	} else if((playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock')) {
		return "win";
	} else {
		return "draw";
	}
}

let playerMove;
let computerMove;
let roundNum = 1;
let playerWin = 0;
let compWin = 0;

function game() {
	computerMove = computerPlay();
	console.log("You choose " + playerMove);
	console.log("Computer choose " + computerMove);
	let result = playRound(playerMove, computerMove);
	showResult(result)
}

function showResult(result) {
	const container = document.querySelector('#result');
	const roundNumText = document.createElement('h3');
	const winner = document.createElement('P');
	if(roundNum > 5) {
		if(playerWin > compWin) {
			winner.innerText = "YOU WIN!!";
		} else if (playerWin < compWin) {
			winner.innerText = "YOU LOSE!!";
		} else {
			winner.innerText = "DRAW!!!";
		}

		roundNumText.innerText = "Result after 5 rounds";
		container.appendChild(roundNumText);

		container.appendChild(winner)
	} else {
		const para = document.createElement('P');
		para.innerText = "You choose " + playerMove + ", Computer choose " + computerMove;
		if(result == "lose") {
			winner.innerText = "You Lose! " + computerMove + " beats " + playerMove;
			compWin++;
		} else if (result == 'win') {
			winner.innerText = "You win! " + playerMove + " beats " + computerMove;
			playerWin++;
		} else {
			winner.innerText = "Draw!";
		}

		roundNumText.innerText = "Round " + roundNum++;
		container.appendChild(roundNumText);

		container.appendChild(para);
		container.appendChild(winner);
	}

}


console.log("qeqwe");

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
	playerMove = 'rock';
	game();
});
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
	playerMove = 'paper';
	game();
});
const scissorBtn = document.querySelector('#scissor');
scissorBtn.addEventListener('click', () => {
	playerMove = 'scissor';
	game();
});
