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
  debugger;
  if (matrix[row - 1][column] === undefined) {
    count += 0;
  }
  if (matrix[row][column - 1] === undefined) {
    count += 0;
  }
  if (matrix[row + 1][column] === undefined) {
    count += 0;
  }
  if (matrix[row][column + 1] === undefined) {
    count += 0;
  }

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

// funcion para cambiar el estado de la posicion
function updateMatrix() {}

// funcion para recorrer las posiciones
function loopMatrix(matrix) {
  const actualMatrix = matrix;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[column].length; column++) {
      const actualRow = row;
      const actualColumn = column;
      checkNeighbours(actualMatrix, actualRow, actualColumn);
    }
  }
}

loopMatrix(newMatrix);
