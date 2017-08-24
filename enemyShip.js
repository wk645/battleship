const EnemyShip = (function EnemyShipClass(){
	const all = []

	return class EnemyShip {
		constructor(positions){
			this.id = all.length + 1
			this.positions = positions
			this.status = null
			all.push(this)
		}

		static all() {
			return all
		}
	}
})()