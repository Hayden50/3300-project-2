import express from "express";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = 8000;

app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
