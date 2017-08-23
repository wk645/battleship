// function ShipClass(){
// 	const all = []

// 	return class Ship {
// 		constructor(name){
// 			this.name = name
// 			this.positions = [1, 1+input]
// 			this.status = null
// 			all.push(this)
// 		}
// 	}
// }

// let Ship = ShipClass()

// if any of the tentative positions are greater than input * input, dont allow movement. 

// function isBiggerThanBoard(element, index, array, input) {
//   return element > (input * input);
// }

// function isLessThanBoard(element, index, array, input) {
// 	return element < 1;
// }

// priorPositions.some(isBiggerThanBoard);  // false


// // use a forEach to check if tentative positions

// if moveLeft.some(isBiggerThanBoard) {
// 	ship.positions = priorPositions
// } else {
// 	ship.positions = moveLeft
// 	renderShips()
// }

// if any position < 1 - left & up
// if any position > board - right & down