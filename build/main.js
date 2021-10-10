const newMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const squares = document.querySelectorAll(".container__row--square");
const startGameButton = document.getElementById("button");
const endGameButton = document.getElementById("button-stop");
startGameButton.addEventListener("click", startGame);

// añadir event a todos los divs
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].style.backgroundColor === "yellow") {
      const row = Math.trunc(i / 15);
      const column = i - 15 * row;
      squares[i].style.backgroundColor = "lightgrey";
      newMatrix[row][column] = 0;
    } else {
      const row = Math.trunc(i / 15);
      const column = i - 15 * row;
      newMatrix[row][column] = 1;
      squares[i].style.backgroundColor = "yellow";
    }
  });
}

// funcion para comprobar vecinos
function checkNeighbours(matrix, row, column) {
  let count = 0;

  if (matrix[row - 1][column - 1] === 1) {
    count++;
  }
  if (matrix[row - 1][column] === 1) {
    count++;
  }
  if (matrix[row - 1][column + 1] === 1) {
    count++;
  }
  if (matrix[row][column - 1] === 1) {
    count++;
  }
  if (matrix[row][column + 1] === 1) {
    count++;
  }
  if (matrix[row + 1][column - 1] === 1) {
    count++;
  }
  if (matrix[row + 1][column] === 1) {
    count++;
  }
  if (matrix[row + 1][column + 1] === 1) {
    count++;
  }
  return count;
}

// funcion para determinar nuevo estado de la casilla si es 0
function checkCountOfZeros(count) {
  if (count === 3) {
    return true;
  }
  return false;
}
// funcion para determinar nuevo estado de la casilla si es 1
function checkCountOfOnes(count) {
  if (count <= 1) {
    return false;
  }
  if (count >= 4) {
    return false;
  }
  if (count === 2 || count === 3) {
    return true;
  }
}

// funcion para comprobar si la posicion es 1 o 0

function checkOneOrZero(matrix, positionX, positionY) {
  if (matrix[positionX][positionY] === 0) {
    return false;
  }
  if (matrix[positionX][positionY] === 1) {
    return true;
  }
}

// funcion crear nueva matriz

function updateMatrix(matrix, count, row, column) {
  if (count === true) {
    matrix[row][column] = 1;
  } else {
    matrix[row][column] = 0;
  }
  return matrix;
}

// funcion para recorrer la matriz
function loopMatrix(matrix) {
  const newestMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let column = 1; column < matrix[row].length - 1; column++) {
      const actualRow = row;
      const actualColumn = column;
      const checkNeighbourCount = checkNeighbours(
        matrix,
        actualRow,
        actualColumn
      );
      const oneOrZero = checkOneOrZero(matrix, actualRow, actualColumn);

      if (oneOrZero === true) {
        const countOfOnes = checkCountOfOnes(checkNeighbourCount);
        updateMatrix(newestMatrix, countOfOnes, actualRow, actualColumn);
      } else if (oneOrZero === false) {
        const countOfZeros = checkCountOfZeros(checkNeighbourCount);
        updateMatrix(newestMatrix, countOfZeros, actualRow, actualColumn);
      }
    }
  }
  return newestMatrix;
}

function changeColors(matrix) {
  const length = 15;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix.length; column++) {
      if (matrix[row][column] === 1) {
        squares[column + length * row].style.backgroundColor = "yellow";
      }
      if (matrix[row][column] === 0) {
        squares[column + length * row].style.backgroundColor = "lightgrey";
      }
    }
  }
}

function gameOfLife(number, matrix) {
  let iterator = 0;
  let changingMatrix = loopMatrix(matrix);
  setTimeout(changeColors(changingMatrix), 1000);
  const loop = setInterval(() => {
    changingMatrix = loopMatrix(changingMatrix);
    changeColors(changingMatrix);
    iterator++;
    if (iterator === number) clearInterval(loop);
  }, 1000);
  endGameButton.addEventListener("click", () => {
    clearInterval(loop);
    stopGame();
  });
}

function startGame() {
  gameOfLife(100, newMatrix);
}

function stopGame() {
  const endgameMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  changeColors(endgameMatrix);
  return endgameMatrix;
}

module.exports = {
  checkOneOrZero,
  checkCountOfOnes,
  checkCountOfZeros,
  checkNeighbours,
  updateMatrix,
};
