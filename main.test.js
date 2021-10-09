const { checkNeighbours, checkOneOrZero } = require("./main");

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
});
