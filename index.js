document.addEventListener("DOMContentLoaded", function() {

	let shipLocation = Math.floor(Math.random() * 25) + 1  

	let boardDiv = document.getElementById("board")
	boardDiv.addEventListener("click", function(event) {

		hitOrMiss(shipLocation, event.target.id)

	})

	function hitOrMiss(shipLocation, destination) {

		var property = event.target

		// console.log(event.target.type)

		if (event.target.type === "button") {

			if (shipLocation === parseInt(destination)) {

				property.style.backgroundColor = "#ff0000"

			} else {
		
			property.style.backgroundColor = "#0055ff"
		}

	}

}

})