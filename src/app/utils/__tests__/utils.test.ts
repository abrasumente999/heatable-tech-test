export {};
import { previousId, capitaliseFirstLetter, nextId } from "../utils";

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

describe("nextId", () => {
  test("should return a number that is 1 greater than the passed ID", () => {
    const obj = {
      name: "bulbasaur",
      order: 1,
      past_types: [],
      species: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
      height: 7,
      held_items: [],
      id: 1,
    };

    expect(nextId(obj.id)).toBe(2);
    expect(nextId(obj.id)).toBeGreaterThan(obj.id);
  });

  test("should return 1 if if the ID is 156", () => {
    const obj = {
      id: 156,
    };
    expect(nextId(obj.id)).toBe(1);
  });
});

describe("previousId", () => {
  test("should return a number that is 1 less than the passed number", () => {
    const obj = {
      name: "bulbasaur",
      order: 1,
      past_types: [],
      species: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
      height: 7,
      held_items: [],
      id: 3,
    };

    expect(previousId(obj.id)).toBe(2);
    expect(previousId(obj.id)).toBeLessThan(obj.id);
  });
  test("should return 156  if the ID is 1", () => {
    const obj = {
      id: 1,
    };
    expect(previousId(obj.id)).toBe(156);
  });
});
