import { sum } from "./sum";

test("example sum function", () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(4, 4)).toBe(8);
});
