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

 	}

// <center><table>
//   <tr>
//     <th>Score Board</th>
//   </tr>
//   <tr>
//     <td>Username 1</td>
//     <td>Outcome t/f</td>
//   </tr>
//   <tr>
//     <td>Username 2</td>
//     <td>Outcome t/f</td>
//   </tr>
// </table></center>