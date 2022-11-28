import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (req, res) => {
  axios
    .request({
      method: "get",
      url: "https://api-nba-v1.p.rapidapi.com/seasons",
      headers: {
        "x-rapidapi-key": "b637575e6bmshbab4c4bc6a23a7bp10b843jsn126610645d1b",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "Accept-encoding": "false",
      },
    })
    .then((response) => res.send(response.data))
    .catch((err) => console.log(err));
});

export default router;
