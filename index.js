document.addEventListener("DOMContentLoaded", function() {
	
	let shipLocation
	let input
	let positions
	let username 
	let randomTarget = Math.floor(Math.random() * (input * input)) + 1
	let myBoard = document.getElementById("userBoard")
	let boardDiv = document.getElementById("board")
	let playButton = document.getElementById("play")
	let gameBoard = document.getElementById("board")
	let newShipButton = document.getElementById("makeShip")
	let startButton = document.getElementById("start")
	let userBoard = document.getElementById("userBoard")

	boardDiv.addEventListener("click", function(event) {

		hitOrMiss(positions)

	})

	playButton.addEventListener("click", function(event) {
		event.preventDefault()

		displayUserBoard()

	})

	newShipButton.addEventListener("click", function(event) {
		event.preventDefault()

		ship = new Ship
		renderShips()
		moveShip(ship)
		return null

	})

	startButton.addEventListener("click", function(event) {
		event.preventDefault()

		userBoard.removeEventListener("keydown", keyDown)

		makeEnemyShip()
		displayTargetingBoard()

	})

})
