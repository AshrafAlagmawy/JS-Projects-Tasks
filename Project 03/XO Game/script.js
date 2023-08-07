// Get all square elements
const squares = document.querySelectorAll('.square');
const headerSpan = document.querySelector('.header span');

// Initialize player and turn
let currentPlayer = 'X';

// Update the header span to display the current player
headerSpan.textContent = currentPlayer;

// Add click event listener to each square
squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (!square.textContent) {
      // Check if the square is empty
      square.textContent = currentPlayer; // Mark the square with the current player's symbol

      // Check if the current player wins
      if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        resetBoard();
        return;
      }

      // Check for a draw
      if (checkDraw()) {
        alert('No one wins!');
        resetBoard();
        return;
      }

      // Switch players for the next turn
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      headerSpan.textContent = currentPlayer; // Update the header with the new current player
    }
  });
});

// Function to check for a win
function checkWin(player) {
  // Define winning combinations
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winCombos.some((combo) => {
    return combo.every((index) => squares[index].textContent === player);
  });
}

// Function to check for a draw
function checkDraw() {
  return [...squares].every((square) => square.textContent !== '');
}

// Function to reset the game board
function resetBoard() {
  squares.forEach((square) => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}
