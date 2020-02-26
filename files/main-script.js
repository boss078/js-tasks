$(document).ready(() => {
  let isPlaying;
  let currPlayer;

  const getPictureFromArray = function getPictureNameFromArrayWithId(line, column) {
    let bgrImage = '';
    switch (arguments.length) {
      case 1:
        bgrImage = $(line).css('background-image');
        break;
      case 2:
        bgrImage = $('.game-field__cell_arr-pos_' + line.toString() + column.toString()).css('background-image');
        break;
      default:
        console.log('Wrong use of getPictureFromArray');
    }
    let answ = '';
    let i = bgrImage.indexOf('img');
    i += 4
    for (; bgrImage[i] !== '.'; i += 1) answ += bgrImage[i];
    return answ;
  };

  const setPictureFromArray = function setPictureNameFromArrayWithId(line, column, value) {
    switch (arguments.length) {
      case 2:
        $(line).css('background-image', 'url("../files/img/' + column.toString() + '.png")');
        break;
      case 3:
        $('.game-field__cell_arr-pos_' + line.toString() + column.toString()).css('background-image', 'url("../files/img/' + value.toString() + '.png")');
        break;
      default:
        console.log('Wrong use of setPictureFromArray');
    }
  };

  const checkWin = function CheckIfWonOfPlayersWin() {
    let currSymbol;
    let isWon;
    for (let column = 0; column < 3; column += 1) {
      currSymbol = '';
      isWon = true;
      for (let line = 0; line < 3; line += 1) {
        if (getPictureFromArray(line, column) === 'Blank') {
          isWon = false;
          break;
        }
        if (currSymbol === '') {
          currSymbol = getPictureFromArray(line, column);
        } else if (currSymbol !== getPictureFromArray(line, column)) {
          isWon = false;
          break;
        }
      }
      if (isWon === true) {
        if (currSymbol === 'X') return 1;
        return 2;
      }
    }
    for (let line = 0; line < 3; line += 1) {
      currSymbol = '';
      isWon = true;
      for (let column = 0; column < 3; column += 1) {
        if (getPictureFromArray(line, column) === 'Blank') {
          isWon = false;
          break;
        }
        if (currSymbol === '') {
          currSymbol = getPictureFromArray(line, column);
        } else if (currSymbol !== getPictureFromArray(line, column)) {
          isWon = false;
          break;
        }
      }
      if (isWon === true) {
        if (currSymbol === 'X') return 1;
        return 2;
      }
    }
    currSymbol = '';
    isWon = true;
    for (let line = 0, column = 0; line < 3; line += 1, column += 1) {
      if (getPictureFromArray(line, column) === 'Blank') {
        isWon = false;
        break;
      }
      if (currSymbol === '') {
        currSymbol = getPictureFromArray(line, column);
      } else if (currSymbol !== getPictureFromArray(line, column)) {
        isWon = false;
        break;
      }
    }
    if (isWon === true) {
      if (currSymbol === 'X') return 1;
      return 2;
    }
    currSymbol = '';
    isWon = true;
    for (let line = 0, column = 2; line < 3; line += 1, column -= 1) {
      if (getPictureFromArray(line, column) === 'Blank') {
        isWon = false;
        break;
      }
      if (currSymbol === '') {
        currSymbol = getPictureFromArray(line, column);
      } else if (currSymbol !== getPictureFromArray(line, column)) {
        isWon = false;
        break;
      }
    }
    if (isWon === true) {
      if (currSymbol === 'X') return 1;
      return 2;
    }
    return 0;
  };

  const checkTie = function checkIfAllCellsAreFilled() {
    let isTie = true;
    for (let line = 0; line < 3; line += 1) for (let column = 0; column < 3; column += 1) if (getPictureFromArray(line, column) === 'Blank') isTie = false;
    if (isTie === true) return true;
    return false;
  };

  const init = function initializeAllValuesAndCells() {
    isPlaying = true;
    currPlayer = 'X';
    $('.hidable').hide();
    $('.wrapper__cell').css({'background-image':'url("../files/img/Blank.png")'});
  };

  $('.wrapper__cell').click(function () {
    if (isPlaying === true && getPictureFromArray(this) === 'Blank') {
      setPictureFromArray(this, currPlayer);
      const winStatus = checkWin();
      if (winStatus === 0) {
        if (currPlayer === 'X') currPlayer = 'O';
        else currPlayer = 'X';
        if (checkTie() === true) {
          isPlaying = false;
          $('div.hidable').show();
          $('div.hidable').text('Tie!');
          $('button.hidable').show();
        }
      } else {
        isPlaying = false;
        $('div.hidable').show();
        $('div.hidable').text(`Player ${currPlayer} win!`);
        $('.hidable').show();
      }
    }
  });

  $('button.hidable').click(() => {
    init();
  });

  init();
});
