document.addEventListener("DOMContentLoaded", function() {
	// when the DOM is loaded, we declare ship location (set later) and set up the board div connection to the HTML 
	let shipLocation
	let input

	// let myHeadline = document.getElementById("myBoardHeadline")
	// myHeadline.style.display = "none"

	let boardDiv = document.getElementById("board")
	//this is checking to see if any buttons on the board have been clicked and call hit or miss function
	boardDiv.addEventListener("click", function(event) {

		// let targetId = document.getElementById(`targetingBoard-${i}`)
		
		hitOrMiss(shipLocation, event.target.id)

	})

	// pressing the play button is going to display the game board
		// setting the gameboard to the div in the HTML
		// calls displayBoards()
	let playButton = document.getElementById("play")
	let gameBoard = document.getElementById("board")
	
	playButton.addEventListener("click", function(event) {
		event.preventDefault()
		
		displayUserBoard()

		
	})

	// this button is connected to the user input of the ship name
	// clicking the add ship button should create a new ship object with the name from the user, a default position, and a status of null
	// the ship should be saved to Ship.all array
	// for each ship in the array, we check the positions, and set each button with an ID equal to the position to a different color to show where the ship is 
	let newShipButton = document.getElementById("makeShip")
	newShipButton.addEventListener("click", function(event) {
		event.preventDefault()
		
		ship = new Ship
		renderShips()
		moveShip(ship)
		return null
	})

	let startButton = document.getElementById("start")
	startButton.addEventListener("click", function(event) {
		event.preventDefault()

		// game = new Game
		displayTargetingBoard()






	})

	function displayUserBoard() {

	const userBoard = []

	input = document.getElementById("boardSize").value
	// RESTRICT numbers not btn 5-10!!!!!

	// console.log(shipLocation)

		// debugger

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

	function displayTargetingBoard() {
		const targetingBoard = []
		// debugger
	 input = parseInt(document.getElementById("boardSize").value)
	 shipLocation = Math.floor(Math.random() * (input * input)) + 1  

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

	function hitOrMiss(shipLocation, destination) {

		var property = event.target

		let currentLocation = `targetingBoard-${shipLocation}`

		if (event.target.type === "button") {

			if (currentLocation === destination) {

				property.style.backgroundColor = "#ff0000"
				alert("you sank one of its ships!")

			} else {
		
			property.style.backgroundColor = "#636e7f"
			
			}

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


	function moveShip(ship) {

		let userBoard = document.getElementById("userBoard")

		userBoard.onkeydown = function(e) {
			e.preventDefault()
		let priorPositions = ship.positions

		// BOUNDARIES!!!!!!!!!!!!!!!!

		function isBiggerThanBoard(element, index, array) {
			// debugger
			return element > (input * input);
		}

		function isLessThanBoard(element, index, array) {
			return element < 1;
		}

	    switch (e.keyCode) {
	        case 37: // left

	      	turnWhite(priorPositions)
	      	// debugger
	        let moveLeft = ship.positions.map(position => position - 1)
	        if (moveLeft.some(isLessThanBoard)) {
				ship.positions = priorPositions
			} else {
				ship.positions = moveLeft
			}
				renderShips()
	            break;
	        case 38: // up
	  		turnWhite(priorPositions)
	        let moveUp = ship.positions.map(position => position - parseInt(input))
	        if (moveUp.some(isLessThanBoard)) {
				ship.positions = priorPositions
			} else {
				ship.positions = moveUp
			}
				renderShips()
	            break;
	        case 39: // right
	        turnWhite(priorPositions)
	        let moveRight = ship.positions.map(position => position + 1)
	        if (moveRight.some(isBiggerThanBoard)) {
				ship.positions = priorPositions
			} else {
				ship.positions = moveRight
			}
				renderShips()
	            break;
	        case 40: // down
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

	}



const Ship = (function ShipClass(){
	const all = []

	return class Ship {
		constructor(){
			this.id = all.length + 1
			this.positions = [1, (1+ parseInt(input))]
			this.status = null
			all.push(this)
		}

		static all() {
			return all
		}
	}
})()




})















































