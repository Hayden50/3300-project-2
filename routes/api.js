import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  axios
    .request({
      method: "get",
      url: "https://api-nba-v1.p.rapidapi.com/seasons",
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "Accept-encoding": "false",
      },
    })
    .then((response) => res.send(response.data))
    .catch((err) => console.log(err));
});

router.post("/player", async (req, res) => {
  const id = await getPlayerId(req);
  if (id === -1) {
    res.send("No Player Found");
  } else {
    const playerStats = await getPlayerStats(id);
    console.log(playerStats);
    res.send("Stats Calculated");
  }
});

const getPlayerId = async (req) => {
  let nameString = req.body.name.toLowerCase();
  const names = nameString.split(" ");
  const firstName = names[0];
  const lastName = names[1];
  let playerArr;

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

  playerArr = await axios
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

const calcStats = (allGames) => {
  let points = 0,
    assists = 0,
    rebounds = 0,
    blocks = 0,
    steals = 0,
    fgm = 0,
    fga = 0;
  let totalGames = allGames.length;
  for (let i = 0; i < allGames.length; i++) {
    let currGame = allGames[i];
    if (currGame !== null && currGame.points !== null) {
      points += currGame.points;
    }
    assists += currGame.assists;
    blocks += currGame.totReb;
    rebounds += currGame.blocks;
    steals += currGame.steals;
    fgm += currGame.fgm;
    fga += currGame.fga;
  }

  const playerStats = {
    avgPoints: Math.round((points / totalGames) * 10) / 10,
    avgAssists: Math.round((assists / totalGames) * 10) / 10,
    avgRebounds: Math.round((rebounds / totalGames) * 10) / 10,
    avgBlocks: Math.round((blocks / totalGames) * 10) / 10,
    avgSteals: Math.round((steals / totalGames) * 10) / 10,
    fgPct: Math.round((fgm / fga) * 10) / 10,
  };

  return playerStats;
};

export default router;
