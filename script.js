const cells = document.querySelectorAll(".cell");
const gameMessage = document.getElementById("game-message");
const restartBtn = document.getElementById("game-restart");
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [0, 4, 6]
];
let gameOptions = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;

startGame()

function startGame() {
  cells.forEach(cell => cell.addEventListener("click", handleCellClick));
  restartBtn.addEventListener("click", restartGame)
  gameMessage.textContent = `${currentPlayer}'s turn`;
  gameRunning = true;
}

function handleCellClick(e) {
  const cellIndex= e.target.getAttribute("data-index");
  if (gameOptions[cellIndex] !== "" || !gameRunning) {
    return;
  }
  handleUpdateCell(e.target, cellIndex);
  // handleChangePlayer();
  checkWin()
}

function handleUpdateCell(cell, cellIndex) {
  gameOptions[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
}

function handleChangePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameMessage.textContent = `${currentPlayer}'s turn`;
}

function checkWin() {
  let winRound = false;

  for(let i = 0; i < winCombos.length; i++) {
    const combo = winCombos[i];
    let cellA = gameOptions[combo[0]];
    let cellB = gameOptions[combo[1]];
    let cellC = gameOptions[combo[2]];

    if(cellA === "" || cellB === "" || cellC === ""){
      continue
    }
    if (cellA === cellB && cellB === cellC) {
      winRound = true;
      break;
    }
  }

  if (winRound) {
    gameMessage.textContent = `${currentPlayer} wins!`;
    gameRunning = false;
  } else if (!gameOptions.includes("")) {
    gameMessage.textContent `Draw!`
    gameRunning = false;
  } else {
    handleChangePlayer();
  }

}

function restartGame() {
  currentPlayer = "X";
  gameRunning = true;
  gameOptions = ["", "", "", "", "", "", "", "", ""];
  gameMessage.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
}