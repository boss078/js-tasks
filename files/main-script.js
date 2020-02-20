$(document).ready(function() {
	const getPictureFromArray = function getPictureNameFromArrayWithId(line, column) {
		let elemHtml = "";
		switch(arguments.length) { 
			case 1:
				elemHtml = $(line).html();
			break;
			case 2:
				elemHtml = $("#" + line.toString() + column.toString()).html();
			break;
		}
		let answ = "";
		for (let i = 14; elemHtml[i] != '.'; i += 1)
			answ += elemHtml[i];
		return answ;
	}
	const setPictureFromArray = function setPictureNameFromArrayWithId(line, column, value) {
		switch(arguments.length) {
			case 2:
				$(line).html("<img src=\"img/" + column.toString() + ".png\"> ");
			break;
			case 3:
				$("#" + line.toString() + column.toString()).html("<img src=\"img/" + value.toString() + ".png\"> ");
			break;
		}
	}

	const checkWin = function CheckIfWonOfPlayersWin() {
		let currSymbol;
		let isWon;
		for(let column = 0; column < 3; column += 1) {
			currSymbol = ""
			isWon = true;
			for(let line = 0; line < 3; line += 1) {
				if(getPictureFromArray(line, column) === "Blank") {
					isWon = false;
					break;
				}
				if (currSymbol === "") {
					currSymbol = getPictureFromArray(line, column);
				} else if(currSymbol != getPictureFromArray(line, column)){
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
				if(getPictureFromArray(line, column) === "Blank") {
					isWon = false;
					break;
				}
				if (currSymbol === "") {
					currSymbol = getPictureFromArray(line, column);
				} else if(currSymbol != getPictureFromArray(line, column)){
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
			if(getPictureFromArray(line, column) === "Blank") {
					isWon = false;
					break;
				}
			if (currSymbol === "") {
				currSymbol = getPictureFromArray(line, column);
			} else if(currSymbol != getPictureFromArray(line, column)){
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
			if(getPictureFromArray(line, column) === "Blank") {
					isWon = false;
					break;
				}
			if (currSymbol === "") {
				currSymbol = getPictureFromArray(line, column);
			} else if(currSymbol != getPictureFromArray(line, column)){
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
				if (getPictureFromArray(line, column) === "Blank")
					isTie = false;
		if (isTie === true)
			return true;
		return false;
	};

	const init = function initializeAllValuesAndCells(){
		isPlaying = true;
		currPlayer = "X";
		$(".hidden").hide();
		$(".cell").html("<img src=\"img/Blank.png\"> ");
	}
	
	let isPlaying;
	let currPlayer;
	init();

	$(".cell").click(function(){
		if (isPlaying === true && getPictureFromArray(this) === "Blank") {
			setPictureFromArray(this, currPlayer);
			let winStatus = checkWin();
			if(winStatus === 0) {
				if(currPlayer === "X")
					currPlayer = "O";
				else
					currPlayer = "X";
				if (checkTie() === true) {
					isPlaying = false;
					$("div.hidden").show();
					$("div.hidden").text("Tie!");
					$("button.hidden").show();
				}
			}
			else {
				isPlaying = false;
				$("div.hidden").show();
				$("div.hidden").text("Player " + currPlayer + " win!");
				$(".hidden").show();
			}
		}
	});

	$("button.hidden").click(function(){
		init();
	});
});