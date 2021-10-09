const {
  checkNeighbours,
  checkOneOrZero,
  checkCountOfOnes,
  checkCountOfZeros,
  updateMatrix,
} = require("./main");

describe("Given a checkOneOrZero function", () => {
  describe("When it receives an zero ", () => {
    test("Then it should return false ", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const row = 1;
      const column = 1;

      const expected = false;

      const result = checkOneOrZero(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives a one", () => {
    test("Then it should return true", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const row = 1;
      const column = 2;

      const expected = true;

      const result = checkOneOrZero(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
});

describe("Given a checkNeighbours function", () => {
  describe("When it receives row 1 column 2", () => {
    test("Then it should return count = 1 ", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const row = 1;
      const column = 2;

      const expected = 1;

      const result = checkNeighbours(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives row 2 column 2", () => {
    test("Then it should return count = 2", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const row = 2;
      const column = 2;

      const expected = 2;

      const result = checkNeighbours(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives row 2 column 3", () => {
    test("Then it should return count = 3", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const row = 2;
      const column = 3;

      const expected = 3;

      const result = checkNeighbours(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives row 2 column 2", () => {
    test("Then it should return count = 2", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const row = 2;
      const column = 2;

      const expected = 2;

      const result = checkNeighbours(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives row 1 column 1", () => {
    test("Then it should return count = 2", () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const row = 1;
      const column = 1;

      const expected = 2;

      const result = checkNeighbours(matrix, row, column);

      expect(result).toBe(expected);
    });
  });
});

describe("Given a checkCountOfOnes function", () => {
  describe("When it receives an zero ", () => {
    test("Then it should return false ", () => {
      const count = 0;
      const expected = false;

      const result = checkCountOfOnes(count);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives a two", () => {
    test("Then it should return true", () => {
      const count = 2;

      const expected = true;

      const result = checkCountOfOnes(count);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives a four", () => {
    test("Then it should return false", () => {
      const count = 4;

      const expected = false;

      const result = checkCountOfOnes(count);

      expect(result).toBe(expected);
    });
  });
});

describe("Given a checkCountOfZeros function", () => {
  describe("When it receives a three ", () => {
    test("Then it should return true ", () => {
      const count = 3;

      const expected = true;

      const result = checkCountOfZeros(count);

      expect(result).toBe(expected);
    });
  });
  describe("When it receives a one", () => {
    test("Then it should return false", () => {
      const count = 1;

      const expected = false;

      const result = checkCountOfZeros(count);

      expect(result).toBe(expected);
    });
  });
});

describe("Given a updateMatrix function", () => {
  describe("When it receives a count = 1 row = 1 column = 2 ", () => {
    test("Then it should return expected ", () => {
      const count = false;
      const row = 1;
      const column = 2;
      const newMatrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const expected = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const result = updateMatrix(newMatrix, count, row, column);

      expect(result).toEqual(expected);
    });
  });
  describe("When it receives a count = 2 row = 2 column = 2", () => {
    test("Then it should return expected", () => {
      const count = true;
      const row = 2;
      const column = 2;
      const newMatrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const expected = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const result = updateMatrix(newMatrix, count, row, column);

      expect(result).toEqual(expected);
    });
  });
  describe("When it receives a count = false row = 3 column = 2", () => {
    test("Then it should return expected", () => {
      const count = false;
      const row = 3;
      const column = 2;
      const newMatrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const expected = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const result = updateMatrix(newMatrix, count, row, column);

      expect(result).toEqual(expected);
    });
  });
});
