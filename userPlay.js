function displayUserBoard() {

	const userBoard = []

	input = document.getElementById("boardSize").value

	if (input < 5 || input > 10) {
		alert("Type a number between 5 and 10!")
		return false
	} 
	
		for (i = 1; i <= (input * input); i++) {

			if (i % input === 0) {

			userBoard.push(`<input type="button" class="btn" id=${i}><br>`)

			} else {

			userBoard.push(`<input type="button" class="btn" id=${i}>`)

			}

		}

		let myBoard = document.getElementById("userBoard")
		myBoard.innerHTML = userBoard.join("")

	}

	let hitCounter = 0


function hitOrMiss(currentShipPosition) {
	var property = event.target
	let string = event.target.id
	username = document.getElementById("username").value

	string = parseInt(string.slice(15))

	if (positions.includes(string)){
		property.style.backgroundColor = "#ff0000"
		hitCounter ++
	} else {
		property.style.backgroundColor = "#636e7f"
	}
	if (hitCounter === 2) {
		alert("YOU WON!")
		
		gameMaster(username, true)

	} else {
		window.setTimeout(computerTurn, 1500)
	}

}

function renderShips () {

	Ship.all().forEach(function(ship) {
		ship.positions.forEach(function(position) {
			myButton = document.getElementById(`${position}`)
			myButton.style.backgroundColor = "#38d853"
		})

	})

}

function turnWhite(positions) {
	positions.forEach(function(position) {
			myButton = document.getElementById(`${position}`)
			myButton.style.backgroundColor = ""
		})
	}

function keyDown(e) {

	e.preventDefault()
	let priorPositions = ship.positions


function isBiggerThanBoard(element, index, array) {
	return element > (input * input);
}

function isLessThanBoard(element, index, array) {
	return element < 1;
}

    switch (e.keyCode) {
        case 37:
      	turnWhite(priorPositions)
      
        let moveLeft = ship.positions.map(position => position - 1)
        if (moveLeft.some(isLessThanBoard)) {
			ship.positions = priorPositions
		} else {
			ship.positions = moveLeft
		}
			renderShips()
            break;
        case 38: 
  		turnWhite(priorPositions)
        let moveUp = ship.positions.map(position => position - parseInt(input))
        if (moveUp.some(isLessThanBoard)) {
			ship.positions = priorPositions
		} else {
			ship.positions = moveUp
		}
			renderShips()
            break;
        case 39: 
        turnWhite(priorPositions)
        let moveRight = ship.positions.map(position => position + 1)
        if (moveRight.some(isBiggerThanBoard)) {
			ship.positions = priorPositions
		} else {
			ship.positions = moveRight
		}
			renderShips()
            break;
        case 40: 
        turnWhite(priorPositions)
        let moveDown = ship.positions.map(position => position + parseInt(input))
        if (moveDown.some(isBiggerThanBoard)) {
			ship.positions = priorPositions
		} else {
			ship.positions = moveDown
		}
			renderShips()
            break;
        case 13:
        	return null
        break;
   		}

}

function moveShip(ship) {

	let userBoard = document.getElementById("userBoard")
	userBoard.addEventListener("keydown", keyDown)


}