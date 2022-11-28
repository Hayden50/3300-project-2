import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Test Page");
});

export default router;
