export {};
import capitaliseFirstLetter from "../utils";

describe("capitaliseFirstLetter", () => {
  test("returns a string with the first letter capitalised", () => {
    expect(capitaliseFirstLetter("string")).toBe("String");
    expect(capitaliseFirstLetter("string")).not.toBe("stRing");
  });

  test("should return a string of the same length as the input string", () => {
    expect(capitaliseFirstLetter("string")).toHaveLength(6);
    expect(capitaliseFirstLetter("hello world")).toHaveLength(11);
  });
});
