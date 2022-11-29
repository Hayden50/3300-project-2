import { calcStats, splitNames } from "./playerUtils";

// NEED TO IMPLEMENT
test("nothing", () => {
  expect(1).toBe(1);
});

test("Splitting Names", () => {
  expect(splitNames("Hayden Rieder")).toStrictEqual(["hayden", "rieder"]);
});

test("Calculating Player Stats", () => {
  const data = [
    {
      points: 10,
      assists: 10,
      totReb: 10,
      blocks: 10,
      steals: 10,
      fgm: 10,
      fga: 10,
    },
    {
      points: 10,
      assists: 10,
      totReb: 10,
      blocks: 10,
      steals: 10,
      fgm: 10,
      fga: 10,
    },
    {
      points: 10,
      assists: 10,
      totReb: 10,
      blocks: 10,
      steals: 10,
      fgm: 10,
      fga: 10,
    },
    {
      points: 10,
      assists: 10,
      totReb: 10,
      blocks: 10,
      steals: 10,
      fgm: 10,
      fga: 10,
    },
  ];

  const output = {
    avgPoints: 10,
    avgAssists: 10,
    avgRebounds: 10,
    avgBlocks: 10,
    avgSteals: 10,
    fgPct: 1,
  };
  expect(JSON.stringify(calcStats(data))).toBe(JSON.stringify(output));
});

test("Calculating Player Stats (No Data)", () => {
  const data = [];

  const output = {
    avgPoints: 0,
    avgAssists: 0,
    avgRebounds: 0,
    avgBlocks: 0,
    avgSteals: 0,
    fgPct: 0,
  };

  expect(JSON.stringify(calcStats(data))).toBe(JSON.stringify(output));
});
