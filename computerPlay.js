function makeEnemyShip() {

	input = parseInt(input)
 	shipLocationOne = Math.floor(Math.random() * (input * input)) + 1
 	let shipLocationTwo

 	let shipOrientation = Math.floor(Math.random() * 2) + 1

 	if (shipOrientation === 1) {
 		if (shipLocationOne % input === 0) {
 			shipLocationTwo = shipLocationOne - 1
 		} else {
 			shipLocationTwo = shipLocationOne + 1
 		}

 	} else {
 		if ((shipLocationOne + input) > (input * input)) {
 			shipLocationTwo = (shipLocationOne - input)
 		} else {
 			shipLocationTwo = (shipLocationOne + input)
 		}
 	}

 	positions = [shipLocationOne, shipLocationTwo]
 	ship = new EnemyShip(positions)

}

function displayTargetingBoard() {
	const targetingBoard = []
	makeEnemyShip()
	input = parseInt(document.getElementById("boardSize").value)

	for (i = 1; i <= (input * input); i++) {

		if (i % input === 0) {

		targetingBoard.push(`<input type="button" class="btn" id="targetingBoard-${i}"><br>`)

		} else {

		targetingBoard.push(`<input type="button" class="btn" id="targetingBoard-${i}">`)

		}

	}

	let itsBoard = document.getElementById("targetBoard")
	itsBoard.innerHTML = targetingBoard.join("")

}

function computerTurn() {

	let previousGuesses = []
	randomTarget = Math.floor(Math.random() * (input * input)) + 1

	if (previousGuesses.includes(randomTarget)) {
		computerTurn()
	} else {
		computerHitOrMiss(randomTarget)
	}
	
}

let computerHitCounter = 0 

function computerHitOrMiss(target) {
	debugger

	myShipPositions = Ship.all()[0].positions
	let targetedButton = document.getElementById(`${target}`)

	if (myShipPositions.includes(target)){
		targetedButton.style.backgroundColor = "#ff0000"
		computerHitCounter ++
	} else {
		targetedButton.style.backgroundColor = "#636e7f"
	}
	if (computerHitCounter === 2) {

		alert("YOU LOST!")
		
		gameMaster(username, true)

	}
	
}