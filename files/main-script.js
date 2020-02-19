$(document).ready(function() {
	const getTextFromArray = function getTextFromArrayWithId(line, column) {
		return $("#" + line.toString() + column.toString()).text();
	}
	const setTextFromArray = function setTextFromArrayWithId(line, column, value) {
		$("#" + line.toString() + column.toString()).text(value.toString());
	}
	const checkWin = function CheckIfWonOfPlayersWin() {
		let currSymbol;
		let isWon;
		for(let column = 0; column < 3; column += 1) {
			currSymbol = ""
			isWon = true;
			for(let line = 0; line < 3; line += 1) {
				if(getTextFromArray(line, column) === " ") {
					isWon = false;
					break;
				}
				if (currSymbol === "") {
					currSymbol = getTextFromArray(line, column);
				} else if(currSymbol != getTextFromArray(line, column)){
					isWon = false;
					break;
				}	
			}
			if(isWon === true) {
				if(currSymbol === "X")
					return 1;
				else
					return 2;
			}
		}
		for(let line = 0; line < 3; line += 1) {
			currSymbol = ""
			isWon = true;
			for(let column = 0; column < 3; column += 1) {
				if(getTextFromArray(line, column) === " ") {
					isWon = false;
					break;
				}
				if (currSymbol === "") {
					currSymbol = getTextFromArray(line, column);
				} else if(currSymbol != getTextFromArray(line, column)){
					isWon = false;
					break;
				}	
			}
			if(isWon === true) {
				if(currSymbol === "X")
					return 1;
				else
					return 2;
			}
		}
		currSymbol = ""
		isWon = true;
		for(let line = 0, column = 0; line < 3; line += 1, column += 1) {
			if(getTextFromArray(line, column) === " ") {
					isWon = false;
					break;
				}
			if (currSymbol === "") {
				currSymbol = getTextFromArray(line, column);
			} else if(currSymbol != getTextFromArray(line, column)){
				isWon = false;
				break;
			}			
		}
		if(isWon === true) {
			if(currSymbol === "X")
				return 1;
			else
				return 2;
		}
		currSymbol = ""
		isWon = true;
		for(let line = 0, column = 2; line < 3; line += 1, column -= 1) {
			if(getTextFromArray(line, column) === " ") {
					isWon = false;
					break;
				}
			if (currSymbol === "") {
				currSymbol = getTextFromArray(line, column);
			} else if(currSymbol != getTextFromArray(line, column)){
				isWon = false;
				break;
			}			
		}
		if(isWon === true) {
			if(currSymbol === "X")
				return 1;
			else
				return 2;
		}
		return 0;
	};

	const checkTie = function checkIfAllCellsAreFilled(){
		let isTie = true;
		for (let line = 0; line < 3; line += 1)
			for (let column = 0; column < 3; column += 1)
				if (getTextFromArray(line, column) === " ")
					isTie = false;
		if (isTie === true)
			return true;
		return false;
	};
	
	let isPlaying = true;
	let currPlayer = "X";
	$("div.game-status-message").hide();
	$(".clickable").click(function(){
		console.log('Text: "' + $(this).text() + '"');
		if (isPlaying === true && $(this).text() === " ") {
			$(this).text(currPlayer);
			let winStatus = checkWin();
			if(winStatus === 0) {
				if(currPlayer === "X")
					currPlayer = "O";
				else
					currPlayer = "X";
				if (checkTie() === true) {
					isPlaying = false;
					$("div.game-status-message").show();
					$("div.game-status-message").text("Tie!");
				}
			}
			else {
				isPlaying = false;
				$("div.game-status-message").show();
				$("div.game-status-message").text("Player " + currPlayer + " win!");
			}
		}
	});
});