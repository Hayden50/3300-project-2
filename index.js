import express from "express";

const app = express();
const PORT = 8000;

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
