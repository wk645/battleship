const Ship = (function ShipClass(){
	const all = []

	return class Ship {
		constructor(){
			this.id = all.length + 1
			this.positions = [1, (1+ parseInt(input))]
			all.push(this)
		}

		static all() {
			return all
		}

	}
	// myShips = Ship.all()

})()