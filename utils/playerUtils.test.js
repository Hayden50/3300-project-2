import { splitNames } from "./playerUtils";

// NEED TO IMPLEMENT
test("nothing", () => {
  expect(1).toBe(1);
});

test("Splitting Names", () => {
  expect(splitNames("Hayden Rieder")).toStrictEqual(["hayden", "rieder"]);
});
