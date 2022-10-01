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
  [2, 4, 6]
];
let gameOptions = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;
const currentPlayerTurn = () => gameMessage.textContent = `${currentPlayer}'s turn`;
const messageColor = (color) => gameMessage.style.color = color;

startGame()

function startGame() {
  cells.forEach(cell => cell.addEventListener("click", handleCellClick));
  restartBtn.addEventListener("click", restartGame)
  currentPlayerTurn()
  gameRunning = true;
}

function handleCellClick(e) {
  const cellIndex= e.target.getAttribute("data-index");
  if (gameOptions[cellIndex] !== "" || !gameRunning) {
    return;
  }
  handleUpdateCell(e.target, cellIndex);
  checkWin()
}

function handleUpdateCell(cell, cellIndex) {
  gameOptions[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
}

function handleChangePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  currentPlayerTurn();
}

function checkWin() {
  let gameWon = false;

  for(let i = 0; i < winCombos.length; i++) {
    const combo = winCombos[i];
    let a = gameOptions[combo[0]];
    let b = gameOptions[combo[1]];
    let c = gameOptions[combo[2]];

    if(a === "" || b === "" || c === ""){
      continue;
    }
    if (a === b && b === c) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    gameMessage.textContent = `${currentPlayer} wins!`;
    messageColor("#5cbf2a");
    gameRunning = false;
  } else if (!gameOptions.includes("")) {
    gameMessage.textContent = `Draw game!`
    messageColor("blue");
    gameRunning = false;
  } else {
    handleChangePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  gameRunning = true;
  gameOptions = ["", "", "", "", "", "", "", "", ""];
  currentPlayerTurn();
  messageColor("black");
  cells.forEach(cell => cell.textContent = "");
}