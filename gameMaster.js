 	function gameMaster(username, outcome) {
 		// debugger
 		// makes the instance, and fetches
 		const game = new Game(username, outcome)

 		fetch(`http://localhost:3000/api/v1/game`, {
 			method: 'POST',
 			body: JSON.stringify(game),
 			headers: {"Content-Type": "application/json"}
 		}).then(res => getGames())
 	}

 	function getGames() {
 		// debugger
 		fetch(`http://localhost:3000/api/v1/game`, {
 			headers: {"Content-Type": "application/json"}
 		}).then(res => res.json()).then(json => showGames(json))
 	}

 	function showGames(json) {
 		// debugger
 		let jsonData = json
 		let username = jsonData.map(info => info.username)
 		let outcome = jsonData.map(info => info.outcome)

 		document.getElementById("score").innerHTML = username.map(function(e, i) {
 			return `${e}, ${outcome[i]}<br>`
 		}).join("")

 	// 	var a = [1, 2, 3]
		// var b = ['a', 'b', 'c']  

		// var c = a.map(function (e, i) {
		//     return [e, b[i]];
		// });
 	}

 	// make a new game object, game = new Game(username, outcome)

 	const Game = (function createGameClass(){

	return class Game {

		constructor(username, outcome){
			this.username = username
			this.outcome = outcome
		}
		
		// sends object

}
		console.log(game)
})()