const newMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

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
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
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

const squares = document.querySelectorAll(".container__row--square");

function changeColors(matrix) {
  const length = 6;
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

changeColors(newMatrix);

function gameOfLife(number, matrix) {
  let iterator = 0;
  let changingMatrix = loopMatrix(matrix);

  const loop = setInterval(() => {
    changingMatrix = loopMatrix(changingMatrix);
    changeColors(changingMatrix);
    iterator++;
    if (iterator === number) clearInterval(loop);
  }, 500);
}

function startGame() {
  gameOfLife(20, newMatrix);
}

const startGameButton = document.getElementById("button");
startGameButton.addEventListener("click", startGame);

module.exports = {
  checkOneOrZero,
  checkCountOfOnes,
  checkCountOfZeros,
  checkNeighbours,
  updateMatrix,
};
