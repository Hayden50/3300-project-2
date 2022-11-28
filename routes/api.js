import express from "express";
import axios from "axios";

const router = express.Router();
const options = {
  method: "GET",
  url: "https://api-nba-v1.p.rapidapi.com/players/statistics",
  params: { id: "236", season: "2020" },
  headers: {
    "X-RapidAPI-Key": "b637575e6bmshbab4c4bc6a23a7bp10b843jsn126610645d1b",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

router.get("/", (req, res) => {
  axios
    .request(options)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  res.send("loading...");
});

export default router;
