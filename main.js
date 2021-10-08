const newMatrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

// funcion para comprobar las posiciones vecinas
function checkNeighbours(matrix, row, column) {
  let count = 0;
  const checkMatrix = matrix;
  if (checkMatrix[row - 1][column - 1] === 1) {
    count++;
  } else if (checkMatrix[row - 1][column] === 1) {
    count++;
  } else if (checkMatrix[row - 1][column + 1] === 1) {
    count++;
  } else if (checkMatrix[row][column - 1] === 1) {
    count++;
  } else if (checkMatrix[row][column + 1] === 1) {
    count++;
  } else if (checkMatrix[row + 1][column - 1] === 1) {
    count++;
  } else if (checkMatrix[row + 1][column] === 1) {
    count++;
  } else if (checkMatrix[row + 1][column + 1] === 1) {
    count++;
  }
  return count;
}

// funcion para cambiar el estado de la posicion
function updateMatrix() {}

// funcion para recorrer las posiciones
function loopMatrix(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[column].length; column++) {
      const actualRow = row;
      const actualColumn = column;
      checkNeighbours(matrix, actualRow, actualColumn);
    }
  }
}

loopMatrix(newMatrix);
