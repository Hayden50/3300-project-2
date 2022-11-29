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
  console.log(id);
  res.send("Getting Player ID");
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

export default router;
