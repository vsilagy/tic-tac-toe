const cells = document.querySelectorAll(".cell");
const gameMessage = document.getElementById("game-message");
const restartBtn = document.getElementById("game-restart");
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [0, 4, 6]
];
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;

startGame()

function startGame() {
  cells.forEach(cell => cell.addEventListener("click", handleCellClicked));
  gameMessage.textContent = `${currentPlayer}'s turn`;
  gameRunning = true;
}

function handleCellClicked(e) {
  const cellIndex= e.target.getAttribute("data-index");
  console.log(cellIndex)
  if (gameState[cellIndex] != "" || !gameRunning) {
    return;
  }
  
}

function handleCellPlayed() {
  
}

function handlePlayerChange() {
  
}

function checkWin() {

}

function restartGame() {

}