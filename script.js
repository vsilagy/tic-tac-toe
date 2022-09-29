const cells = document.querySelectorAll(".cells");
const gameMessage = document.getElementById("game-message");
const restartBtn = document.getElementById("game-restart");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [0, 4, 6]
];