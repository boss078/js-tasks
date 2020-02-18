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
		for(let column = 0; column <= 3; column += 1) {
			currSymbol = ""
			isWon = true;
			for(let line = 0; line <= 3; line += 1) {
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
		for(let line = 0; line <= 3; line += 1) {
			currSymbol = ""
			isWon = true;
			for(let column = 0; column <= 3; column += 1) {
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
		}
		for(let line = 0, column = 0; line <= 3; line += 1, column += 1) {
			currSymbol = ""
			isWon = true;
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
		for(let line = 0, column = 3; line <= 3; line += 1, column -= 1) {
			currSymbol = ""
			isWon = true;
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
	
	let isPlaying = true;
	let currPlayer = "X";
	$("#clickable").click(function(){
		if (isPlaying === true && $(this).text() === "") {
			$(this).text(currPlayer);
			let winStatus = checkWin();
			if(winStatus === 0)
				if(currPlayer === "X")
					currPlayer = "O";
				else
					currPlayer = "X";
				
		}
	});
});