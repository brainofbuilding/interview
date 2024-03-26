import { sortByAlphabeticalOrder } from "./utils";

describe("Utils", () => {
  test("test", () => {
    expect(sortByAlphabeticalOrder([])).toEqual([]);
  });
});
