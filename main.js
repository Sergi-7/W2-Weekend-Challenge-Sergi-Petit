const newMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
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
  return true;
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

// funcion para recorrer la matriz
function loopMatrix(matrix) {
  for (let row = 1; row < matrix.length - 1; row++) {
    for (let column = 1; column < matrix[column].length - 1; column++) {
      const actualRow = row;
      const actualColumn = column;

      checkNeighbours(matrix, actualRow, actualColumn);
    }
  }
}

// funcion crear nueva matriz

function updateMatrix(count) {
  const updatedMatrix = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];

  for (let row = 1; row < updatedMatrix.length - 1; row++) {
    for (let column = 1; column < updatedMatrix.length - 1; column++) {
      if (count === true) {
        updatedMatrix[row][column] = 1;
      } else {
        updatedMatrix[row][column] = 0;
      }
    }
  }
  return updatedMatrix;
}
