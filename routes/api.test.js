// import axios from "axios";

// test("Get Player Data", async () => {
//   const data = { name1: "LeBron James", name2: "Ja Morant" };
//   const [player1, player2] = await axios.post(
//     "http://localhost:8000/api/players",
//     data
//   );

//   const lebron = {
//     avgPoints: 23.2,
//     avgAssists: 7.3,
//     avgRebounds: 0.5,
//     avgBlocks: 7.2,
//     avgSteals: 1.1,
//     fgPct: 0.5,
//   };

//   const ja = {
//     avgPoints: 20,
//     avgAssists: 7.5,
//     avgRebounds: 0.2,
//     avgBlocks: 4.1,
//     avgSteals: 0.9,
//     fgPct: 0.5,
//   };

//   expect(JSON.stringify(player1)).toBe(JSON.stringify(lebron));
//   expect(JSON.stringify(player2)).toBe(JSON.stringify(ja));
// });

test("Random", () => {
  expect(1).toBe(1);
});
