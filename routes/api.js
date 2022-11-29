import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const router = express.Router();

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

export default router;
