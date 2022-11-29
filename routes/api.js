import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
import { calcStats, splitNames } from "../utils/playerUtils.js";

dotenv.config();
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => res.send("BASE ADDRESS"));

router.post("/player", async (req, res) => {
  const playerOneName = req.body.name1;
  const playerTwoName = req.body.name2;

  const id1 = await getPlayerId(playerOneName);
  const id2 = await getPlayerId(playerTwoName);

  if (id1 === -1 && id2 === -1) {
    res.send("Both Players Not Found");
  } else if (id1 === -1) {
    res.send("Player One Missing");
  } else if (id2 === -1) {
    res.send("Player Two Missing");
  } else {
    const playerOneStats = await getPlayerStats(id1);
    const playerTwoStats = await getPlayerStats(id2);
    res.send([playerOneStats, playerTwoStats]);
  }
});

const getPlayerId = async (name) => {
  const [firstName, lastName] = splitNames(name);

  const cfg = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players",
    params: { search: lastName },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      "Accept-encoding": "false",
    },
  };

  let playerArr = await axios
    .request(cfg)
    .then((res) => res.data.response)
    .catch((err) => console.log(err));

  playerArr.filter((obj) => obj.firstname.toLowerCase() === firstName);
  if (playerArr.length === 0) return -1;
  return playerArr[0].id;
};

const getPlayerStats = async (id) => {
  const cfg = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players/statistics",
    params: { id: id, season: "2020" },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
      "Accept-encoding": "false",
    },
  };

  const allGames = await axios
    .request(cfg)
    .then((res) => res.data.response)
    .catch((err) => console.log(err));

  const playerStats = calcStats(allGames);
  return playerStats;
};

export default router;
